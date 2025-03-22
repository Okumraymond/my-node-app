#!/bin/bash
cd /var/www/my-node-app
npm install
npm start
pm2 start app.js --name "my-node-app"
pm2 save
pm2 startup

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Only start the server if this file is run directly
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
}

module.exports = app; // Export for testing

