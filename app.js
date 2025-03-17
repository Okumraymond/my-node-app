const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is my Node.js app deployed with AWS CodePipeline!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
