import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, useStaticQuery } from 'gatsby';
import firebaseIcon from '../assets/icons/firebase.png';
import gatsbyIcon from '../assets/icons/gatsby.png';
import graphqlIcon from '../assets/icons/graphql.png';
import javascriptIcon from '../assets/icons/javascript.png';
import jestIcon from '../assets/icons/jest.png';
import reactIcon from '../assets/icons/react.png';
import reduxIcon from '../assets/icons/redux.png';
import sassIcon from '../assets/icons/sass.png';
import typescriptIcon from '../assets/icons/typescript.png';
import webpackIcon from '../assets/icons/webpack.png';
import '../scss/project.scss';

const icons = {
  firebase: firebaseIcon,
  gatsby: gatsbyIcon,
  graphql: graphqlIcon,
  javascript: javascriptIcon,
  jest: jestIcon,
  react: reactIcon,
  redux: reduxIcon,
  sass: sassIcon,
  typescript: typescriptIcon,
  webpack: webpackIcon,
};

const ProjectPage = ({ location: { hash } }) => {
  const {
    contentfulProjects: { list },
  } = useStaticQuery(
    graphql`
      query {
        contentfulProjects {
          list {
            id
            name
            description
            website
            stack
            projectId
            content {
              longDescription
              features
              stack
              screenshot {
                url
                size
              }
              githubRepoUrl
            }
          }
        }
      }
    `,
  );

  const projectData = list.find(
    project => project.projectId === hash.replace('#', ''),
  );

  return (
    <Fragment>
      <article className="project-info">
        <h2>{projectData.name}</h2>
        <p>
          {projectData.content.longDescription
            ? projectData.content.longDescription
            : projectData.description}
        </p>
        <p>
          The live version of the app -{' '}
          <a
            href={projectData.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectData.website.replace('https://', '')}
          </a>
        </p>
        <p>
          You can check the source code on{' '}
          <a
            href={projectData.content.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </p>
        <section className="features">
          <h3>Features:</h3>
          <ul>
            {projectData.content.features.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
        <section className="stack">
          <h3>Project stack:</h3>
          <ul>
            {projectData.content.stack.map(item => (
              <li key={item}>
                <div className="stack__feature">
                  <span>{item}</span>
                  {icons[item] ? (
                    <img src={icons[item]} alt={`${item}`} width={16} />
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <figure>
          <figcaption>screenshot:</figcaption>
          <img
            style={{ width: projectData.content.screenshot.size }}
            src={projectData.content.screenshot.url}
            alt="website screenshot"
          />
        </figure>
        <Link to="/projects" className="back">
          &lt; back to projects list
        </Link>
      </article>
    </Fragment>
  );
};

ProjectPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectPage;
