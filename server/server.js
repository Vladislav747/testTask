const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./database');

let configs = require('./config/serverConfigs');
let port = process.env.PORT || configs.defaultPort;

var appRoot = require('app-root-path');

let tasks = require('./routes/tasks');
let app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")

  next()
});

app.use(cors());
app.use(bodyParser.json());

app.use('/tasks', tasks);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(appRoot + '/dist/'));

  // Handle SPA
  app.get('/', (req, res) => 
  res.sendFile(appRoot + '/dist/index.html'));
}

//Error capture
app.use((req, res, next) => {

  let err = new Error('Invalid Endpoint')
  err.status = 404

  next(err)
});

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});

console.log("Started sqlite database");
// Resets the database and launches the express app
database
  .sync({
    force: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })
  })
