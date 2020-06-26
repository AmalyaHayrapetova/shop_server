module.exports = (sequelize, Sequelize) => {
  const OderStatus = sequelize.define("OderStatuses", {
    StatusName: {
      type: Sequelize.STRING(50),
      primaryKey: true,
    },
  });
  return OderStatus;
};
