const router = require("express").Router();
const articleRoutes = require("./articles");
console.log('in api routes index.js file')
// Book routes
router.use("/articles", articleRoutes);

module.exports = router;
