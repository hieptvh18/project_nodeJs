// manage routing
const express = require('express');
const router = express.Router();

// import cotnroller
const courseController = require('../app/controllers/CourseController');

// route con cua route index.js(duoi phia sau cua /news)
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);
// update edit
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
// restore
router.patch('/:id/restore', courseController.restore);
// force course
router.delete('/:id/force', courseController.forceDestroy);

// action remove muntiple courses
router.post('/form-action',courseController.handleFormAction)


// remove
router.delete('/:id', courseController.destroy);






// export
module.exports = router;