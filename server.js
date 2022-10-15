const https = require('https');
const fs = require('fs');
require('dotenv').config();
const app = require('./src/app');
const { mongoConnect } = require('./src/services/db');

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem'),
// };
const server = https.createServer(app);
const PORT = process.env.PORT || 5000;

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log('Server is listening');
  });
}

startServer();
