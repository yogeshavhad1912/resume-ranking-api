const stringSimilarity = require('string-similarity');

function calculateScore(job, resumeText) {
  return stringSimilarity.compareTwoStrings(job, resumeText) * 100;
}

module.exports = { calculateScore };
