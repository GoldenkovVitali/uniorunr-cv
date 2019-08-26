import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import '../scss/generic.scss';
import '../scss/index.scss';

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
      <SEO title="Summary" />
      <h2>&gt; Summary</h2>
      {paragraphs.map(paragraph => (
        <p key={paragraph.id}>{paragraph.data}</p>
      ))}
    </Fragment>
  );
};

export default IndexPage;
