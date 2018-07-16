const home = require ('../controllers/home');
const user = require ('../controllers/user');
const auth = require ('../controllers/auth');

const appRouter = (app) => {
    app.get("/", home.index);
    app.get("/api/auth/token", auth.token);
    app.get("/api/user", user.get);
    app.post("/api/user", user.register);

}
  
module.exports = appRouter;