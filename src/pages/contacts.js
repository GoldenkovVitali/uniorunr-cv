import React from 'react';
import '../scss/contacts.scss';
import { graphql, useStaticQuery } from 'gatsby';

const ContactsPage = () => {
  const { contentfulSiteAuthorData } = useStaticQuery(
    graphql`
      query {
        contentfulSiteAuthorData {
          githubProfileLink
          email
          githubLogin
          telegram
        }
      }
    `,
  );

  return (
    <section className="contacts">
      <h2>Contacts</h2>
      <ul className="contacts__list">
        <li>
          GitHub:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={contentfulSiteAuthorData.githubProfileLink}
          >
            {contentfulSiteAuthorData.githubLogin}
          </a>
        </li>
        <li>Telegram: {contentfulSiteAuthorData.telegram}</li>
        <li>
          <a href={`mailto:${contentfulSiteAuthorData.email}`}>DROP AN EMAIL</a>
        </li>
      </ul>
    </section>
  );
};

export default ContactsPage;
