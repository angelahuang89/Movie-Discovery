import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import {} from 'dotenv/config';
import axios from 'axios';

import useWebpackMiddleware from './environment/useWebpackMiddleware';

const app = express();
const assets = path.join(__dirname, '../client/');

useWebpackMiddleware(app);
app.use(express.static(assets));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(`${assets}.index.html`);
});

app.get('/search', (req, res) => {
  const url = req.query.term
    ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&query=${req.query.term}&language=en-US&page=1&include_adult=false`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`;
  axios({
    method: 'get',
    url,
    responseType: 'json',
  })
    .then((response) => {
      res.send(response.data.results);
    });
});

app.get('/info/:id', (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`;
  axios({
    method: 'get',
    url,
    responseType: 'json',
  })
    .then((response) => {
      res.send(response.data);
    });
});

export default app;
