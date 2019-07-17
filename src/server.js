import express from 'express';
import compression from 'compression';
import ssr from './routes/ssr';

const app = express();
const port = process.env.PORT || 3030;

app.use( compression() );

/**
 * Static resources
 */
app.use( express.static( 'public' ));

/**
 * serves /firstssr from ssr file
 */
app.use( '/firstssr', ssr );

app.listen( port, function listenHandler() {
  console.info( `Running on ${port}...` );
});
