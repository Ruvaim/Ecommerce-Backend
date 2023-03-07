const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const authRouter = require('./routes/authRoute.js');
const productRouter = require('./routes/productRoute.js');
const blogRouter = require('./routes/blogRoute.js');
const prodCategoryRouter = require('./routes/prodCatRoute.js');
const blogCategoryRouter = require('./routes/blogCatRoute.js');
const brandRouter = require('./routes/brandRoute.js');
const couponRouter = require('./routes/couponRoute.js');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/pcategory', prodCategoryRouter);
app.use('/api/bcategory', blogCategoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/coupon', couponRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
