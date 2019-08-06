import React from 'react';
import { Link } from 'gatsby';
import './Menu.scss';

const Menu = () => (
  <nav className="menu-section">
    <ul className="menu-section__list">
      <li>
        <a href="#">summary</a>
      </li>
      <li>
        <a href="#">skills</a>
      </li>
      <li>
        <a href="#">experience</a>
      </li>
      <li>
        <a href="#">projects</a>
      </li>
      <li>
        <a href="#">education</a>
      </li>
      <li>
        <a href="#">english</a>
      </li>
      <li>
        <Link to="/contacts">contacts</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
