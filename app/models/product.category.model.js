module.exports = (sequelize, Sequelize) => {
  const  Category = sequelize.define("ProductCategoryTypes", {
  
   CategoryName: {
     type: Sequelize.STRING(120),
     allowNull: false,
     unique: true
   },
   });

 return Category;
};
