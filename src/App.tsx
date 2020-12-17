import React from 'react';
import { HashRouter } from 'react-router-dom';

// Importing bootstrap and its dependency
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// Custom stylesheets
import './App.scss';

import PrivateRoute from './utils/routes/PrivateRoute';
import { appRoutes } from './utils/routes';

/**
 * App Component
 * Main component responsible for rendering the whole application.
 */
function App() {

  return (
    <HashRouter>
      <PrivateRoute appRoutes={appRoutes} redirectPath={{ to: "/login", from: "/" }} />
    </HashRouter>
  );
}

export default App;
