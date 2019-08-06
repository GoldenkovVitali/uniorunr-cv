import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './Avatar.scss';

const Avatar = () => {
  const { contentfulAsset, contentfulSiteAuthorData } = useStaticQuery(
    graphql`
      query {
        contentfulAsset(title: { eq: "avatar" }) {
          title
          description
          file {
            url
          }
        }
        contentfulSiteAuthorData {
          name
        }
      }
    `,
  );

  return (
    <section className="avatar-section">
      <img
        className="avatar-section__avatar"
        src={contentfulAsset.file.url}
        alt={contentfulAsset.description}
      />
      <h1 className="avatar-section__name">{contentfulSiteAuthorData.name}</h1>
    </section>
  );
};

export default Avatar;
