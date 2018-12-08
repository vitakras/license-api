module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Licenses', [{
    name: 'Apache license 2.0',
    slug: 'apache-2-0',
    description: 'Your Typical badboy license',
    storageKey: 'fake/key',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Apache license 3.0',
    slug: 'apache-3-0',
    description: 'Your Typical Apache license',
    storageKey: 'fake/key',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Artistic license 2.0',
    slug: 'artistic-2.0',
    description: 'Your Typical Artistic license',
    storageKey: 'fake/key',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Licenses', null, {}),
};
