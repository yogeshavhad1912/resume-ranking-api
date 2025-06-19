const { parseResume } = require('../services/parserService');
const { calculateScore } = require('../services/scorerService');

exports.rankResumes = async (req, res) => {
  try {
    const job = req.body.job;
    const files = req.files;

    if (!job || !files || files.length === 0) {
      return res.status(400).json({ error: 'Job description and at least one resume are required' });
    }

    const results = [];

    for (const file of files) {
      const text = await parseResume(file.path);
      const score = calculateScore(job, text);
      results.push({ fileName: file.originalname, score: score.toFixed(2) });
    }

    results.sort((a, b) => b.score - a.score);

    res.json({ ranked: results });
  } catch (err) {
    console.error('Error in rankResumes:', err.message);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
};
