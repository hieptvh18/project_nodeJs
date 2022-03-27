// manage routing
const express = require('express');
const router = express.Router();

// import cotnroller
const courseController = require('../app/controllers/CourseController');

// route con cua route index.js(duoi phia sau cua /news)
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);




// export
module.exports = router;