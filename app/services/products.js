const db = require('../models')
const { QueryTypes } = require('sequelize')
const Products = db.products
const Stores = require('../controllers/store.controller')
const Color = require('../controllers/color.controller')
const ProductsColor = require('../controllers/products.color.controller')
const ProductImages = require('../controllers/product.images.controller')
const ProductMaterials = require('../controllers/product.material.controller')
const ProductGender = require('../controllers/product.gender.controller')
const ProductClothingSize = require('../controllers/product.clothing.size.controller')
const SubCategory = require('../controllers/sub.category.controller')
const ProductShoesSize = require('../controllers/product.shoes.size.controller')
const Gender = require('../controllers/gender.controller')

exports.create = async products => {
  var storeID = await Stores.findStoreID(products.StoreName)
  var genderID = await Gender.findGenderById(products.Gender)
  var categoryName = await findProductType(products.SubCategoryName)
  products['StoreID'] = storeID
  var product = await Products.create(products)
  await ProductGender.createProductGender(genderID, product.id)
  if(categoryName[0].CategoryName !== "Accessories"){
  await createSizes(categoryName[0].CategoryName, products.Sizes, product.id)

  }
  await addProductAttributes(products.Attributes, product.id)
  await addProductMaterials(products.MaterialType, product.id)

  return product
}

exports.findAll = async products => {
  return Products.findAll(products)
}

exports.findProductID = async productName => {
  const productID = await sequelize.query(
    'SELECT `id` FROM `Products` WHERE ProductName =:ProductName',
    {
      replacements: { ProductName: productName },
      type: QueryTypes.SELECT
    }
  )
  return productID
}

exports.findProductById = async productID => {
  const product = await sequelize.query(
    'SELECT * FROM `Products` WHERE id =:id',
    {
      replacements: { id: productID },
      type: QueryTypes.SELECT
    }
  )
  return product
}

exports.findProductByName = async name => {
  const product = await sequelize.query(
    'SELECT id FROM `Products` WHERE ProductName =:ProductName',
    {
      replacements: { ProductName: name },
      type: QueryTypes.SELECT
    }
  )
  return product
}

exports.findProductsOfCategory = async productCategoryName => {
  const products = await sequelize.query(
    'SELECT `*` FROM `Products` `p` LEFT JOIN ' +
      '`SubCategoryTypes` `cat` ON p.SubCategoryName=cat.SubCategoryName WHERE cat.CategoryName =:CategoryName',
    {
      replacements: { CategoryName: productCategoryName },
      type: QueryTypes.SELECT
    }
  )
  return products
}

exports.findProductsOfSubCategory = async (
  productSubCategoryName,
  genderType
) => {
  const products = await sequelize.query(
    'Select * From Products  p LEFT JOIN ProductGenderTypes  genderTypes ON genderTypes.GenderID' +
      ' =(SELECT id from Genders WHERE GenderType =:GenderType) ' +
      'WHERE p.id = genderTypes.ProductID AND p.SubCategoryName =:SubCategoryName',
    {
      replacements: {
        SubCategoryName: productSubCategoryName,
        GenderType: genderType
      },
      type: QueryTypes.SELECT
    }
  )
  return products
}

exports.findProductsByGenderAndSubCategory = async (
  productSubCategoryName,
  genderType,
  store
) => {
  if (genderType === undefined) {
    return await findProductByStoreSubCategory(store, productSubCategoryName)
  } else if (store === undefined) {
    const products = await sequelize.query(
      // "Select * From Products p LEFT JOIN ProductGenderTypes  genderTypes ON genderTypes.GenderID" +
      //   " =(SELECT id from Genders WHERE GenderType =:GenderType) " +
      //   "WHERE p.id = genderTypes.ProductID AND p.SubCategoryName =:ProductSubCategoryName and p.StoreID =(SELECT id from Stores where StoreName =:StoreName)",
      'Select * from Products p LEFT JOIN ProductGenderTypes genderTypes ON genderTypes.GenderID=(SELECT id from Genders WHERE GenderType =:GenderType)' +
        'WHERE p.id = genderTypes.ProductID AND p.SubCategoryName =:ProductSubCategoryName',
      {
        replacements: {
          ProductSubCategoryName: productSubCategoryName,
          GenderType: genderType
        },
        type: QueryTypes.SELECT
      }
    )
    return products
  } else {
    return await findProductsByGenderStoreSubCategory(
      genderType,
      store,
      productSubCategoryName
    )
  }
}

const findProductsByGenderStoreSubCategory = async (
  gender,
  store,
  subCategory
) => {
  const products = await sequelize.query(
    'Select * From Products p LEFT JOIN ProductGenderTypes  genderTypes ON genderTypes.GenderID' +
      ' =(SELECT id from Genders WHERE GenderType =:GenderType) ' +
      'WHERE p.id = genderTypes.ProductID AND p.SubCategoryName =:ProductSubCategoryName and p.StoreID =(SELECT id from Stores where StoreName =:StoreName)',
    {
      replacements: {
        ProductSubCategoryName: subCategory,
        GenderType: gender,
        StoreName: store
      },
      type: QueryTypes.SELECT
    }
  )
  return products
}

const findProductByStoreSubCategory = async (store, subcategory) => {
  const products = await sequelize.query(
    'Select * From Products p ' +
      'WHERE  p.SubCategoryName =:ProductSubCategoryName and p.StoreID =(SELECT id from Stores where StoreName =:StoreName)',
    {
      replacements: {
        ProductSubCategoryName: subcategory,
        StoreName: store
      },
      type: QueryTypes.SELECT
    }
  )
  return products
}

const findProductType = async categoryName => {
  const result = await SubCategory.findCategoryBySubCategory(categoryName)
  return result
}

const addProductMaterials = async (material, productID) => {
  for (index in material) {
    await ProductMaterials.createProductByCredentials(
      material[index],
      productID
    )
  }
}

const createSizes = async (categoryName, productSize, productID) => {
  if (categoryName === 'Clothing') {
    for (index in productSize) {
      var size = productSize[index].Size
      var colors = productSize[0].AvailableColors
      for (i in colors) {
        await ProductClothingSize.createSize(
          size,
          productID,
          colors[i].Count,
          colors[i].Color
        )
      }
    }
  } else if (categoryName === 'Shoes') {
    for (index in productSize) {
      var size = productSize[index].Size
      var count = productSize[index].Count
      await ProductShoesSize.createSize(size, productID, count)
    }
  }
}

const addProductAttributes = async (attributes, productID) => {
  for (index in attributes) {
    var colorType = attributes[index].Color
    var isColorAvailable = await Color.checkAvailableColor(colorType)
    var colorBody = { Color: colorType }

    if (isColorAvailable === 0) {
      await Color.createColorWithName(colorBody)
    }
    var colorID = await Color.findColorById(colorType)
    await ProductsColor.createColor(colorID, productID)

    for (image_index in attributes[index].ImagePath) {
      var images = attributes[index].ImagePath[image_index]
      await ProductImages.createProductImages(images, productID, colorType)
    }
  }
}

exports.findProductByGender = async gender => {
  const products = await sequelize.query(
    'Select * From Products p LEFT JOIN ProductGenderTypes  genderTypes ON genderTypes.GenderID' +
      ' =(SELECT id from Genders WHERE GenderType =:GenderType) ' +
      'WHERE p.id = genderTypes.ProductID',
    {
      replacements: {
        GenderType: gender
      },
      type: QueryTypes.SELECT
    }
  )
  return products
}

//fixme
exports.update = async products => {
  return Products.update(
    {
      Description: products.Description,
      Description: store.Description
    },
    {
      where: {
        ProductName: products.productName
      },
      plain: true
    }
  )
}
