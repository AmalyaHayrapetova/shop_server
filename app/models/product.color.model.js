const db = require("./color.model")
const Color = db.color
const Products = db.products

module.exports = (sequelize, Sequelize) => {
    const ProductColor = sequelize.define("ProductColors", {

        ColorID: {
            type: Sequelize.INTEGER,
            references: Color,
            referencesKey: 'id', 
            allowNull: false,
        },
        ProductID: {
            type: Sequelize.INTEGER,
            references: Products,
            referencesKey: 'id', 
            allowNull: false,
        },


    })
    return ProductColor;

}