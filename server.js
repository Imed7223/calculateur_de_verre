const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'maquette-verre.html'));
});

app.listen(port, () => {
  console.log(`Calculateur live sur port ${port}`);
});
