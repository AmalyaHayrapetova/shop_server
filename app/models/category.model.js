module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("CategoryTypes", {
    CategoryName: {
      type: Sequelize.STRING(120),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
  });

  return Category;
};
