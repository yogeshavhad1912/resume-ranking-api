const fs = require('fs');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

async function parseResume(filePath) {
  const ext = filePath.split('.').pop().toLowerCase();

  if (ext === 'pdf') {
    const data = await pdfParse(fs.readFileSync(filePath));
    return data.text;
  } else if (ext === 'docx') {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  } else if (ext === 'txt') {
    return fs.readFileSync(filePath, 'utf-8');
  } else {
    throw new Error('Unsupported file type: ' + ext);
  }
}

module.exports = { parseResume };
