const bodyParser = require("body-parser");

const appMiddlewares = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}
  
module.exports = appMiddlewares;