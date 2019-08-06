import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './Menu.scss';

class Menu extends Component {
  state = {
    activeTab: 'summary',
  }

  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    if (pathname === '/') {
      this.setState({
        activeTab: 'summary',
      });
    } else {
      this.setState({
        activeTab: pathname.replace('/', '').replace('/', ''),
      });
    }
  }

  updateActiveTab = ({ target: { id } }) => {
    this.setState({
      activeTab: id,
    });
  }

  render() {
    const { activeTab } = this.state;
    const tabs = [
      'summary',
      'skills',
      'experience',
      'projects',
      'education',
      'english',
      'contacts',
    ];

    return (
      <nav className="menu-section">
        <ul className="menu-section__list">
          {tabs.map(id => (
            <li key={id}>
              <Link
                id={id}
                className={activeTab === id ? 'active' : ''}
                to={id === 'summary' ? '/' : `/${id}`}
                onClick={this.updateActiveTab}
              >
                {id}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Menu;
