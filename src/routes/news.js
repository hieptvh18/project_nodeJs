// manage routing
const express = require('express');
const router = express.Router();

// import cotnroller
const newsController = require('../app/controllers/NewsController');

// route con cua route index.js(duoi phia sau cua /news)
router.get('/:param', newsController.show);
router.get('/', newsController.index);




// export
module.exports = router;