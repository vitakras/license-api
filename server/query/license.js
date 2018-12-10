const attributes = [
  'name', 'slug', 'description',
];

class LicenseQuery {
  constructor(License) {
    this.License = License;
  }

  async getAll() {
    return this.License.findAll({ attributes });
  }

  async getBySlug(slug) {
    return this.License.findOne({ where: { slug }, attributes });
  }
}

module.exports = LicenseQuery;
