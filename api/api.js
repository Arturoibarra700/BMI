const express = require('express');
const path = require('path');

const app = express();
const v1 = require('./controllers/v1');
const port = 5012;

// JSON Middleware
app.use(express.json());

const swagger = require('./swagger.json');
const ui = require('swagger-ui-express');

// Using Swagger for documentation
app.use('/swagger', ui.serve);
app.use('/swagger', ui.setup(swagger));

// Static files
const folder = path.resolve(__dirname, 'public');
app.use('/', express.static(folder));

// Routers
app.use('/v1', v1);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})