const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  res.send(`<h1>Ваше випадкове число: ${randomNumber}</h1>`);
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
  });
}

module.exports = app;