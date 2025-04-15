const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Custom Service is running!');
});

app.listen(PORT, () => {
  console.log(`Custom service listening on port ${PORT}`);
});
