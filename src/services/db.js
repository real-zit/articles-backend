const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;
mongoose.connection.once('open', () => {
  console.log('Connection was successful');
});

mongoose.connection.on('err', (err) => {
  console.log(err);
});

const mongoConnect = async () => {
  console.log(process.env.PORT);
  console.log(process.env.MONGO_URL);
  await mongoose.connect(MONGO_URL);
};

const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

module.exports = { mongoConnect, mongoDisconnect };
