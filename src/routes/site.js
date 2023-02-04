// manage routing
const express = require('express');
const router = express.Router();

// import cotnroller
const siteController = require('../app/controllers/SiteController');

// route con cua route index.js(duoi phia sau cua /news)
router.get('/contact', siteController.contact);
router.get('/', siteController.home);
router.get('/home', siteController.home);




// export
module.exports = router;