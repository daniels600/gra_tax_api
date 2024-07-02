

module.exports.setHeaders = (app) => {
  try {
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
  } catch (error) {
    console.log(error);
  }
};
