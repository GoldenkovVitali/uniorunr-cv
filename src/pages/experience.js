import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';

const ExperiencePage = () => {
  const {
    contentfulExperience: { paragraphs },
  } = useStaticQuery(
    graphql`
      query {
        contentfulExperience {
          paragraphs {
            data
            id
          }
        }
      }
    `,
  );

  return (
    <Fragment>
      <SEO title="Experience" />
      <h2>&gt; Experience</h2>
      {paragraphs.map(paragraph => (
        <p key={paragraph.id}>{paragraph.data}</p>
      ))}
    </Fragment>
  );
};

export default ExperiencePage;
