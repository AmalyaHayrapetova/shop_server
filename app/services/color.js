const db = require("../models");
const Color = db.color
const { QueryTypes } = require('sequelize');
sequelize = db.sequelize

exports.create = async (color) =>{
    return Color.create(color);
}


exports.findAll = async (color) =>{
    return Color.findAll(color);
}


exports.isColorAvailable = async (color) => {
const isAvailable = await sequelize.query("SELECT Count(*) as Available FROM `Colors` WHERE Color = :Color",{
        replacements: { Color : color },
         type: QueryTypes.SELECT 
        });

     return isAvailable;


}

exports.findColorID = async (color) => {
    const colorID = await sequelize.query("SELECT `id` FROM `Colors` WHERE Color = :Color",{
        replacements: { Color: color },
         type: QueryTypes.SELECT 
        });
        return colorID;

}