const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

// ✅ Export the app and server
module.exports = { app, server };

