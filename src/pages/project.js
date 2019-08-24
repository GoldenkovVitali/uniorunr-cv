import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ProjectPage = () => {
  const {
    contentfulSummary: { paragraphs },
  } = useStaticQuery(
    graphql`
      query {
        contentfulSummary {
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
      <h2>&gt; Summary</h2>
      {paragraphs.map(paragraph => (
        <p key={paragraph.id}>{paragraph.data}</p>
      ))}
    </Fragment>
  );
};

export default ProjectPage;
