const express = require('express');
const app = express();

const PORT = 9000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`your app is running at http://localhost:${PORT}`);
});
