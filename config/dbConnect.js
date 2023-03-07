const { default: mongoose } = require('mongoose');

mongoose.set('strictQuery', true);
const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);

    console.log('DB CONNECTED');
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
