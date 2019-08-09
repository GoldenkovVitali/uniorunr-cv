import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const EducationPage = () => {
  const {
    contentfulEducation: { paragraphs },
  } = useStaticQuery(
    graphql`
      query {
        contentfulEducation {
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
      <h2>&gt; Education</h2>
      {paragraphs.map(paragraph => (
        <p key={paragraph.id}>{paragraph.data}</p>
      ))}
    </Fragment>
  );
};

export default EducationPage;
