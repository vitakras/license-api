module.exports = (sequelize, DataTypes) => {
  const License = sequelize.define('License', {
    name: DataTypes.STRING,
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: DataTypes.TEXT,
    storageKey: {
      type: DataTypes.STRING,
    },
  }, {});
  return License;
};
