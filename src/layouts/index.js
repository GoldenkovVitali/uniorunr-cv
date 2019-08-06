import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Avatar from '../components/Avatar/Avatar';
import Menu from '../components/Menu/Menu';

class Layout extends Component {
  state = {
    activeTab: 1,
  }

  render() {
    const { activeTab } = this.state;
    const { children, location } = this.props;
    console.log(children, location, activeTab);
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { activeTab }));

    return (
      <Fragment>
        <SEO title="Home" />
        <div className="app-wrapper">
          <aside className="nav-section">
            <Avatar />
            <Menu />
          </aside>
          <main className="main-section">{childrenWithProps}</main>
        </div>
      </Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
