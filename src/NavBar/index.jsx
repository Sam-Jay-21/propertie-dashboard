import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

const TABS = [
  {
    id: 'all',
    label: 'Property Listings',
    path: '/',
  },
  {
    id: 'saved',
    label: 'Saved Listings',
    path: '/saved-listings',
  },
];

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      {TABS.map((tab) => (
        <NavLink
          isActive={(match, location) => location.pathname === tab.path}
          key={tab.id}
          activeClassName={styles.selected}
          to={tab.path}
        >
          <span>{tab.label}</span>
        </NavLink>
      ))}
    </div>
  );
};
