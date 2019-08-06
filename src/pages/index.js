import React, { Fragment } from 'react';
import SEO from '../components/seo';
import Avatar from '../components/Avatar/Avatar';
import '../scss/generic.scss';
import '../scss/index.scss';

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <div className="app-wrapper">
      <aside className="nav-section">
        <Avatar />
      </aside>
      <main className="main-section">main</main>
    </div>
  </Fragment>
);

export default IndexPage;
