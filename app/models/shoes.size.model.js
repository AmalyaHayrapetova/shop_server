module.exports = (sequelize, Sequelize) => {
  const Size = sequelize.define("ShoesSizes", {
    SizeType: {
      type: Sequelize.STRING(90),
      allowNull: false,
      primaryKey: true,
    },
  });
  return Size;
};
