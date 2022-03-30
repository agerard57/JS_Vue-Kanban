module.exports = function (app) {
  app.get("/", (_req, res) => {
    res.json({
      message: "Home page ;)",
    });
  });
};
