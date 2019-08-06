import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';
import Avatar from './Avatar/Avatar';
import Menu from './Menu/Menu';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <SEO title="Home" />
        <div className="app-wrapper">
          <aside className="nav-section">
            <Avatar />
            <Menu />
          </aside>
          <main className="main-section">main</main>
        </div>
      </Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
