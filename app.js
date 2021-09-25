const express = require('express');

const app = express();

// register view engine
// config app settings 
app.set('view engine','ejs');
app.set('views', 'myviews');

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

app.get('/', (req, res) => {
  //   res.send('<p>Home Page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});
app.get('/color', (req, res) => {
  //   res.send('<p>Home Page</p>');
  res.sendFile('./views/color.html', { root: __dirname });
});
app.get('/colorme', (req, res) => {
  //   res.send('<p>Home Page</p>');
  res.redirect('/color');
});

app.use((req, res, next) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
