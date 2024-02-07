// use express and import functions/routes from api folder
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// sends message if wrong route is entered and used
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;