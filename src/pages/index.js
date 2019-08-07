import React, { Fragment } from 'react';
import '../scss/generic.scss';
import '../scss/index.scss';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
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
      {paragraphs.map(paragraph => (
        <p key={paragraph.id}>{paragraph.data}</p>
      ))}
    </Fragment>
  );
};

export default IndexPage;
