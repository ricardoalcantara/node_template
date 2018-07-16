const express = require("express");
const routes = require("./routes/routes");
const middlewares = require("./middlewares/middlewares");

const app = express();

middlewares(app);
routes(app);

const startServer = (port = 3000) => {
    const server = app.listen(port, function () {
        console.log("app running on port.", server.address().port);
    });
}

module.exports = startServer;