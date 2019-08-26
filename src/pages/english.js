import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';

const EnglishPage = () => {
  const {
    contentfulEnglish: { paragraphs },
  } = useStaticQuery(
    graphql`
      query {
        contentfulEnglish {
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
      <SEO title="English level" />
      <h2>&gt; English</h2>
      {paragraphs.map(paragraph => (
        <p key={paragraph.id}>{paragraph.data}</p>
      ))}
    </Fragment>
  );
};

export default EnglishPage;
