module.exports = (sequelize, Sequelize) => {
  const Gender = sequelize.define("Genders", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    GenderType: {
      type: Sequelize.STRING(90),
      allowNull: false,
    },
  });
  return Gender;
};
