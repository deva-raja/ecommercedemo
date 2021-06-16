const SellerRouter = require('./route/SellerRouter');
const ProductRouter = require('./route/ProductRouter');
const MyProductRouter = require('./route/MyProductRouter');
const UserRouter = require('./route/UserRouter');

const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const { authMiddleWare } = require('./middleware/AuthMiddleWare');
const { urlencoded } = require('express');

const PORT = 5000;
const app = express();

// middlewares
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(urlencoded({ extended: true }));

// database connection
mongoose
  .connect(
    'mongodb+srv://vinu:vinu123@cluster0.qxwlj.mongodb.net/shopcart?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then((result) => {
    app.listen(PORT);
    console.log('Listening to port 5000');
  })
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.use('/auth', authMiddleWare);
app.use('/seller', SellerRouter);
app.use('/product', ProductRouter);
app.use('/user', UserRouter);
app.use('/myproduct', MyProductRouter);
