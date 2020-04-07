module.exports = (sequelize, Sequelize) => {
    const ProductColor = sequelize.define("Colors", {

        ColorName: {
            type: Sequelize.STRING(90),
        }

    })
    return ProductColor;

}