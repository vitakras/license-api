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

  describe('getBySlug', () => {
    it('calls findOne with [name, slug, description] attriubtes where slug', async () => {
      licenseMock.findOne = jest.fn().mockImplementation(async () => ({ mock: 'license' }));

      const fakeLicense = await query.getBySlug('fake-slug');

      expect(fakeLicense).toEqual({ mock: 'license' });
      expect(licenseMock.findOne).toHaveBeenCalledWith({
        where: {
          slug: 'fake-slug',
        },
        attributes: ['name', 'slug', 'description'],
      });
    });
  });
});
