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
          location
          position
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
      <h2 className="avatar-section__position">
        {contentfulSiteAuthorData.position}
      </h2>
      <p className="avatar-section__location">
        {contentfulSiteAuthorData.location}
      </p>
    </section>
  );
};

export default Avatar;
