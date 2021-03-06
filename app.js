require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');
const dotenv = require('dotenv');
const db = require("./models");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

dotenv.config();
global.__basedir = __dirname;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// api routes
app.use('/users', require('./routes/users/user.controller'));
app.use('/classes', require('./routes/classes/classe.controller'));
app.use('/signalements', require('./routes/signalements/signalement.controller'));
app.use('/documents', require('./routes/documents/document.controller'));
app.use('/mail', require('./routes/mail/mail.controller'));

// global error handler
app.use(errorHandler);

db.sequelize.sync({alter: false}).then(() => {
   console.log("Drop and re-sync db.");
});

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : process.env.PORT;
app.listen(port, () => console.log('Server listening on port ' + port));
