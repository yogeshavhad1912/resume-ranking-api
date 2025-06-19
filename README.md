# 📄 Resume Ranking API

A backend API built with **Node.js** and **Express.js** that ranks resumes based on their relevance to a provided job description.

---

## 🚀 Features

- Upload multiple resumes (`.pdf`, `.docx`, `.txt`)
- Parse and extract text from each resume
- Compare resumes against a job description
- Score and rank resumes by relevance
- RESTful API with `POST` endpoint
- API Documentation via Swagger

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Multer (file uploads)
- pdf-parse (for `.pdf` parsing)
- mammoth (for `.docx` parsing)
- string-similarity (for scoring)
- Swagger (for API docs)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/resume-ranking-api.git
cd resume-ranking-api
npm install
