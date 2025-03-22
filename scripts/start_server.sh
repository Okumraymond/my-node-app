#!/bin/bash
cd /var/www/my-node-app

# Install dependencies (if needed)
npm install

# Start the application using PM2
pm2 start app.js --name "my-node-app"

# Save the PM2 process list to ensure it restarts on reboot
pm2 save

# Set up PM2 startup script (if not already done)
pm2 startup
