require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

//mongoose
const connectDB = require('./server/config/db');

const app = express();
const port = 5000 || process.env.PORT;

//connect to DB
connectDB();
//public folder
app.use(express.static('public'));
//template engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
//view engine
app.set('view engine', 'ejs');

//routes from the app.get
app.use('/', require('./server/routes/main'));

app.listen(port, () => {
  console.log(`Mori's app is now listening to port ${port}`);
});
