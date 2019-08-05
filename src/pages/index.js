import React, { Fragment } from 'react';
import SEO from '../components/seo';
import '../scss/generic.scss';
import '../scss/index.scss';

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <div className="app-wrapper">
      <nav className="nav-section">nav</nav>
      <main className="main-section">main</main>
    </div>
  </Fragment>
);

export default IndexPage;
