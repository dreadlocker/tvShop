const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')
const app = express();
const port = 5432;

require('./config/db'); //@ Initiliaze db

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors()); //@ include before other routes
app.use(morgan('dev'));

require('./routes/tv')(app);  //@ TV routes

app.listen(port, () => `Server running on port ${port}`);