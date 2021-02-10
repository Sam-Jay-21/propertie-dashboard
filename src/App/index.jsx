import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import regeneratorRuntime from 'regenerator-runtime';
import { ListingsProvider } from '../hooks';
import { Routes } from './Routes';
import { NavBar } from '../NavBar';
import styles from './styles.scss';

const App = () => (
  <div className={styles.app} data-test-id="component-app">
    <Router>
      <NavBar data-test-id="nav-bar" />
      <ListingsProvider>
        <Routes />
      </ListingsProvider>
    </Router>
  </div>
);

export default App;
