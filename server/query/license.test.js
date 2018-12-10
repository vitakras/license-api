const LicenseQuery = require('./license');

describe('LicenseQuery', () => {
  let licenseMock;
  let query;

  beforeEach(() => {
    licenseMock = {};
    query = new LicenseQuery(licenseMock);
  });

  describe('getAll', () => {
    it('calls findAll with [name, slug, description] attriubtes', async () => {
      licenseMock.findAll = jest.fn().mockImplementation(async () => ({ mock: 'license' }));

      const fakeLicenses = await query.getAll();

      expect(fakeLicenses).toEqual({ mock: 'license' });
      expect(licenseMock.findAll).toHaveBeenCalledWith({
        attributes: ['name', 'slug', 'description'],
      });
    });
  });
});
