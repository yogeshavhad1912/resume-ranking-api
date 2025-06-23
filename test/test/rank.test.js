const request = require('supertest');
const express = require('express');
const app = require('../app'); 

describe('POST /api/rank-resumes', () => {
  it('should return 400 for missing fields', async () => {
    const res = await request(app)
      .post('/api/rank-resumes')
      .field('job', '');

    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toBeDefined();
  });
});
