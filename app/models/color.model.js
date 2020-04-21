module.exports = (sequelize, Sequelize) => {
  const Color = sequelize.define("Colors", {
    Color: {
      type: Sequelize.STRING(90),
      allowNull: false,
    },
  });
  return Color;
};
