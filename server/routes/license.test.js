const express = require('express');
const request = require('supertest');

const licenseRoute = require('./license');

const InitLicenseRoute = () => {
  const app = express();
  app.use('/license', licenseRoute);
  return app;
};

describe('GET all routes', () => {
  it('returns a list of licenses', async () => {
    const app = InitLicenseRoute();

    const res = await request(app).get('/license');
    expect(res.body).toEqual([
      {
        name: 'Apache license 2.0',
        slug: 'apache-2-0',
        description: 'Your Typical badboy license',
      }]);
  });
});
