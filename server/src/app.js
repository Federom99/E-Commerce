const ErrorHandler = require("./models/ErrorHandler");

dotenv = require("dotenv");
express = require("express");
MasterRouter = require("./routers/MasterRouter");
// ErrorHandler = require("./models/ErrorHandler");

// load the environment variables from the .env file
dotenv.config({
    path: ".env",
  });

class Server {
 app = express();
 router = MasterRouter;
}

const server = new Server();

// make server listen on some port
// routa iniciales habilitada es localhost:3000/api/themeA
// routa iniciales habilitada es localhost:3000/api/themeB
server.app.use("/api", server.router);

// make server app handle any error
server.app.use(
  (err, req, res, next) => {
    res.status(err.statusCode || 500).json({
      status: "error",
      statusCode: err.statusCode,
      message: err.message,
    });
  }
);

((port = process.env.APP_PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
  })();