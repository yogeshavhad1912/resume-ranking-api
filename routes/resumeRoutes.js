const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { rankResumes } = require('../controllers/rankController');

router.post('/rank-resumes', upload.array('resumes'), rankResumes);

module.exports = router;
