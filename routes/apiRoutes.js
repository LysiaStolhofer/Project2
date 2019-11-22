var db = require("../models");

module.exports = function(app) {
  // Get all data
  app.get("/api/examples", async (req, res) => {
    try {
      const data = await db.PrimpnPlay_db.findAll({});
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

    // Get all client profiles
    app.get("/api/clients", async (req, res) => {
      try {
        const data = await db.PrimpnPlay_db.findAll({});
        res.json(data);
      } catch (error) {
        res.status(400).json({ error: { name: error.name, msg: error.message } });
      }
    });

      // Get Pet Profile
  app.get("/api/client/:id", async (req, res) => {
    try {
      const data = await db.PrimpnPlay_db.findAll({
        where: {
          Id: id
        }
      });
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Create a new profile
  app.post("/api/profile", async (req, res) => {
    try {
      const result = await db.PrimpnPlay_db.create(req.body);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Delete an Profile by id
  app.delete("/api/profile/:id", async (req, res) => {
    try {
      const result = await db.PrimpnPlay_db.destroy({ where: { id: req.params.id } });
      const deletedRowCount = result;
      const status = deletedRowCount > 0 ? 200 : 404;
      res.status(status).json({ deletedRowCount });
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });
};
