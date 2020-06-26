module.exports = (sequelize, Sequelize) => {
  const Size = sequelize.define("ClothingSizes", {
    SizeType: {
      type: Sequelize.STRING(90),
      allowNull: false,
      primaryKey: true,
    },
  });
  return Size;
};
