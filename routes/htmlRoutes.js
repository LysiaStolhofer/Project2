var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", async (req, res) => {
    try {
      res.render("index", {
      });
    } catch (error) {
      res
        .status(400)
        .render("400", { error: { name: error.name, msg: error.message } });
    }
  });

    // Load form page
  app.get("/enroll", async (req, res) => {
    try {
      res.render("newform");
      catch (error) {
      res
        .status(400)
        .render("400", { error: { name: error.name, msg: error.message } });
        
    ;
  
        // Load Profiles page
  app.get("/profile", async (req, res) => {
    try {
    
        res.render("profile");
      catch (error) {
      res
        .status(400)
        .render("400", { error: { name: error.name, msg: error.message } });
        
    ;
  
       // Load Billing page
   app.get("/billing", async (req, res) => {
    try {
      
res.render("bill");
      catch (error) {
      res
        .status(400)
        .render("400", { error: { name: error.name, msg: error.message } });
        
    });
  
  // Load Profile page and pass in an profile by id
  app.get("/client/:id", async (req, res) => {
    try {
      const Profile = await db.Clients.findOne({
        where: { id: req.params.id }
    });
    res.render("profile", {
    example: dbExample
    ;
} catch (error) {
      res
        .status(400)
      .render("400", { error: { name: error.name, msg: error.message } });
    }
});
  
    ender 404 page for any unmatched routes
      t("*", async (req, res) => {
    s.render("404");
    
      
