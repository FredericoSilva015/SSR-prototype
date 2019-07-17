import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import handlebars from 'handlebars';

import App from '../components/app';

const router = express.Router();

/**
 * Response on firstssr request
 */
router.get( '/', async ( req, res ) => {

  // grab & stringify the html content
  const html = fs.readFileSync( 
    path.resolve( __dirname, '../index.html' ), 'utf8'
  );
  
  // pipe through content through handlebars
  const hbsTemplate = handlebars.compile( html );

  // convert the App into html components
  // if you console.log this conts it returns the actual html elements
  const reactComp = renderToString( <App /> );

  // replace reactele with reactComp on the template
  const htmlToSend = hbsTemplate({ reactele: reactComp });

  res.send( htmlToSend );
})

export default router;
