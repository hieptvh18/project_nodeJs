// manage routing
const express = require('express');
const router = express.Router();

// import cotnroller
const uploadfileController = require('../app/controllers/UploadFileController');

router.get('/', uploadfileController.index);
router.post('/post', uploadfileController.postFile);


// export
module.exports = router;