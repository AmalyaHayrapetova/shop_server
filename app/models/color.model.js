module.exports = (sequelize, Sequelize) => {
    const Color = sequelize.define("Colors", {

        ColorName: {
            type: Sequelize.STRING(90),
        }

    })
    return Color;

}