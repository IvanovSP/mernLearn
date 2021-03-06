const express = require('express');
const mongoose = require('mongoose');
const users = require('./routs/api/users');
const profile = require('./routs/api/profile');
const posts = require('./routs/api/posts' );

const app = express();

const db = require('./config/keys').mongoUri;

mongoose
  .connect(db)
  .then(() => console.log('Mongo conected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running ${port}`));
