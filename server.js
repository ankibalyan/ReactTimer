const express = require('express');
const app = express();

const PORT = 9000;

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  }
  next();
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`your app is running at http://localhost:${PORT}`);
});
