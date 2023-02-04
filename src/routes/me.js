// me

const express = require('express');
const router = express.Router();

// import cotnroller
const meController = require('../app/controllers/MeController');

// route con cua route index.js(duoi phia sau cua /news)
router.get('/stored/courses',meController.index);
// trash
router.get('/trash/courses',meController.trashCourse);



// export
module.exports = router;