const db = require("../models");
const { QueryTypes } = require("sequelize");
const Products = db.products;
const Stores = require("../controllers/store.controller");
const Color = require("../controllers/color.controller");
const ProductsColor = require("../controllers/products.color.controller");
const ProductImages = require("../controllers/product.images.controller");
const ProductMaterials = require("../controllers/product.material.controller");
const ProductGender = require("../controllers/product.gender.controller");
const ProductClothingSize = require("../controllers/product.clothing.size.controller");
const ProductSubCategory = require("../controllers/product.sub.category.controller");
const ProductShoesSize = require("../controllers/product.shoes.size.controller");
const Gender = require("../controllers/gender.controller");

exports.create = async (products) => {
  var storeID = await Stores.findStoreID(products.StoreName);
  var genderID = await Gender.findGenderById(products.Gender);
  var categoryName = await findProductType(products.ProductSubCategoryName);
  products["StoreID"] = storeID;
  var product = await Products.create(products);
  await ProductGender.createProductGender(genderID, product.id);
  await createSizes(categoryName[0].CategoryName, products.Sizes, product.id);
  await addProductAttributes(products.Attributes, product.id);
  await addProductMaterials(products.MaterialType, product.id);

  return product;
};

exports.findAll = async (products) => {
  return Products.findAll(products);
};

exports.findProductID = async (productName) => {
  const productID = await sequelize.query(
    "SELECT `id` FROM `Products` WHERE ProductName =:ProductName",
    {
      replacements: { ProductName: productName },
      type: QueryTypes.SELECT,
    }
  );
  return productID;
};

exports.findProductsOfCategory = async (productCategoryName) => {
  const products = await sequelize.query(
    "SELECT `ProductName` FROM `Products` `p` LEFT JOIN " +
      "`ProductSubCategoryTypes` `cat` ON p.ProductSubCategoryName=cat.SubCategoryName WHERE cat.CategoryName =:CategoryName",
    {
      replacements: { CategoryName: productCategoryName },
      type: QueryTypes.SELECT,
    }
  );
  return products;
};

exports.findProductsOfSubCategory = async (
  productSubCategoryName,
  genderType
) => {
  const products = await sequelize.query(
    "Select * From Products  p LEFT JOIN ProductGenderTypes  genderTypes ON genderTypes.GenderID" +
      " =(SELECT id from Genders WHERE GenderType =:GenderType) " +
      "WHERE p.id = genderTypes.ProductID AND p.ProductSubCategoryName =:ProductSubCategoryName",
    {
      replacements: {
        ProductSubCategoryName: productSubCategoryName,
        GenderType: genderType,
      },
      type: QueryTypes.SELECT,
    }
  );
  return products;
};

exports.findProductsByStoreNameFromSubCategory = async (
  productSubCategoryName,
  genderType,
  storeName
) => {
  const products = await sequelize.query(
    "Select * From Products p LEFT JOIN ProductGenderTypes  genderTypes ON genderTypes.GenderID" +
      " =(SELECT id from Genders WHERE GenderType =:GenderType) " +
      "WHERE p.id = genderTypes.ProductID AND p.ProductSubCategoryName =:ProductSubCategoryName and p.StoreID =(SELECT id from Stores where StoreName =:StoreName)",
    {
      replacements: {
        ProductSubCategoryName: productSubCategoryName,
        GenderType: genderType,
        StoreName: storeName,
      },
      type: QueryTypes.SELECT,
    }
  );
  return products;
};

const findProductType = async (categoryName) => {
  const result = await ProductSubCategory.findCategoryBySubCategory(
    categoryName
  );
  return result;
};

const addProductMaterials = async (material, productID) => {
  for (index in material) {
    await ProductMaterials.createProductByCredentials(
      material[index],
      productID
    );
  }
};

const createSizes = async (categoryName, productSize, productID) => {
  if (categoryName === "Clothing") {
    for (index in productSize) {
      var size = productSize[index].Size;
      var colors = productSize[0].AvailableColors;
      for (i in colors) {
        await ProductClothingSize.createSize(
          size,
          productID,
          colors[i].Count,
          colors[i].Color
        );
      }
    }
  } else if (categoryName === "Shoes") {
    for (index in productSize) {
      var size = productSize[index].Size;
      var count = productSize[index].Count;
      await ProductShoesSize.createSize(size, productID, count);
    }
  }
};

const addProductAttributes = async (attributes, productID) => {
  for (index in attributes) {
    var colorType = attributes[index].Color;
    var isColorAvailable = await Color.checkAvailableColor(colorType);
    var colorBody = { Color: colorType };

    if (isColorAvailable === 0) {
      await Color.createColorWithName(colorBody);
    }
    var colorID = await Color.findColorById(colorType);
    await ProductsColor.createColor(colorID, productID);

    for (image_index in attributes[index].ImagePath) {
      var images = attributes[index].ImagePath[image_index];
      await ProductImages.createProductImages(images, productID, colorType);
    }
  }
};

//fixme
exports.update = async (products) => {
  return Products.update(
    {
      Description: products.Description,
      Description: store.Description,
    },
    {
      where: {
        ProductName: products.productName,
      },
      plain: true,
    }
  );
};
