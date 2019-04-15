const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')
const app = express();
const port = 5432;

const db = require('./config/db');
const Tv = require('./models/tv');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors()); // include before other routes
app.use(morgan('dev'));

// TV routes
require('./routes/tv')(app);

app.listen(port, () => `Server running on port ${port}`);