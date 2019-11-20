const pet = new Pet({
  animal: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  }
})

//  Request handler:

app.post('/signup', async (req, res) => {
  const { animal, firstName } = req.body
  const user = new User({ email, firstName })
  const ret = await user.save()
  res.json(ret)
})

////////////////////////////////////////////////////////////////


//html routes

  // Load index page
  app.get("/", async (req, res) => {
    try {
      const dbExamples = await db.Example.findAll({});
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    } catch (error) {
      res
        .status(400)
        .render("400", { error: { name: error.name, msg: error.message } });
    }
  });

    // Load Enrollment Page
    app.get("/????", async (req, res) => {
      try {
        const dbExamples = await db.Example.findAll({});
        res.render("????", {
          examples: dbExamples
        });
      } catch (error) {
        res
          .status(400)
          .render("400", { error: { name: error.name, msg: error.message } });
      }
    });

      // Load Profile page
  app.get("/????", async (req, res) => {
    try {
      const dbExamples = await db.Example.findAll({});
      res.render("????", {
        msg: "Welcome!",
        examples: dbExamples
      });
    } catch (error) {
      res
        .status(400)
        .render("400", { error: { name: error.name, msg: error.message } });
    }
  });

    // Load Billing page
    app.get("/????", async (req, res) => {
      try {
        const dbExamples = await db.Example.findAll({});
        res.render("????", {
          msg: "Welcome!",
          examples: dbExamples
        });
      } catch (error) {
        res
          .status(400)
          .render("400", { error: { name: error.name, msg: error.message } });
      }
    });

    /////////////////////////////

    // *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require('path');

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/blog.html'));
  });

  // Route to the cms page
  app.get('/cms', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/cms.html'));
  });

  // blog route loads blog.html
  app.get('/blog', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/blog.html'));
  });
};
