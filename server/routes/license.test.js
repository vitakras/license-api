const express = require('express');
const request = require('supertest');

const LicenseRoute = require('./license');

describe('LicenseRoute', () => {
  let app;
  let licenseRoute;
  let licenseQueryMock;

  beforeEach(() => {
    licenseQueryMock = {};
    licenseRoute = LicenseRoute(licenseQueryMock);

    app = express();
    app.use('/license', licenseRoute);
  });

  describe('GET all routes', () => {
    let res;
    const licenses = [
      {
        name: 'Apache license 2.0',
        slug: 'apache-2-0',
        description: 'Your Typical badboy license',
      },
    ];

    beforeEach(async () => {
      licenseQueryMock.getAll = jest.fn().mockImplementation(async () => licenses);
      res = await request(app).get('/license');
    });

    it('calls the LicenseQuery.getAll', () => {
      expect(licenseQueryMock.getAll).toHaveBeenCalled();
    });

    it('returns a list of licenses', async () => {
      expect(res.body).toEqual(licenses);
    });
  });

  describe('GET Single License', () => {
    let res;
    const license = {
      name: 'Apache license 2.0',
      slug: 'apache-2-0',
      description: 'Your Typical badboy license',
    };

    beforeEach(async () => {
      licenseQueryMock.getBySlug = jest.fn().mockImplementation(async () => license);
      res = await request(app).get('/license/apache-2-0');
    });

    it('calls the LicenseQuery getBySlug', () => {
      expect(licenseQueryMock.getBySlug).toHaveBeenCalledWith('apache-2-0');
    });

    it('returns a license', async () => {
      expect(res.body).toEqual(license);
    });
  });
});
