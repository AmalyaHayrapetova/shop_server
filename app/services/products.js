const db = require("../models");
const Products = db.products
const Stores = require("../controllers/store.controller")
const Color = require("../controllers/color.controller")
const ProductsColor = require("../controllers/products.color.controller")
const ProductImages  = require("../controllers/product.images.controller")


exports.create = async (products) =>{

    var storeID = await Stores.findStoreID(products.StoreName)
    products["StoreID"] = storeID;
    var result =  await Products.create(products);

    for ( index in products.Attributes) {
        var colorType = products.Attributes[index].Color;

        var isColorAvailable = await Color.checkAvailableColor(colorType)
        var colorBody = { 'Color' : colorType}

        if(isColorAvailable === 0){
            await Color.createColorWithName(colorBody)
        }
        var colorID = await Color.findColorById(colorType);
        await ProductsColor.createColor(colorID,result.id)
    
        for( image_index in products.Attributes[index].ImagePath){
            var images = products.Attributes[index].ImagePath[image_index]
            await ProductImages.createProductImages(images,result.id,colorType)
        }


    }

    return result;
}

exports.findAll = async (products) =>{
    return Products.findAll(products);
}

exports.findProductID = async(productName) => {
    const productID = await sequelize.query("SELECT `id` FROM `Products` WHERE ProductName =:ProductName",{
        replacements: { ProductName: productName },
         type: QueryTypes.SELECT 
        });
        return productID;
}


// exports.update = async (products) => {
//     return Products.update({
//         Description : products.Description, 
//         Description : store.Description,
//         PhoneNumber: store.PhoneNumber
    
//     },
//       {
//           where:{
//             StoreName : store.StoreName,
//             PhoneNumber: store.PhoneNumber
//           },
//           plain: true        
//         })

// }

