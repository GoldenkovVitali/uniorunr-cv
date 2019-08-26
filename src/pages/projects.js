import React, { Fragment } from 'react';
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
import '../scss/projects.scss';

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

const ProjectsPage = () => {
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
          }
        }
      }
    `,
  );

  return (
    <Fragment>
      <h2>&gt; Projects</h2>
      <ul className="projects-list">
        {list.map(project => (
          <li key={project.id} className="project-card">
            <Link to={`/project#${project.projectId}`}>
              <h3 className="project-name">{project.name}</h3>
            </Link>
            <p className="project-description">{project.description}</p>
            <ul className="stack-icons">
              {project.stack.map(icon => (
                <li key={icon}>
                  <img src={icons[icon]} alt={`${icon}`} width={16} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ProjectsPage;
