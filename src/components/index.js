import React from 'react';
import { hydrate } from 'react-dom';
import App from './app'

/**
 * Hydrate the app
 * Replaces render to allow server side rendering
 */
hydrate( <App />, document.getElementById( 'reactele' ));
