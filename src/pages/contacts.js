import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import '../scss/contacts.scss';

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
      <SEO title="Contacts" />
      <h2>&gt; Contacts</h2>
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
