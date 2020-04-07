const db = require("../models");
const Products = db.products
const Stores = require("../controllers/store.controller")
const Color = require("../controllers/color.controller")
const ProductsColor = require("../controllers/products.color.controller")



exports.create = async (products) =>{

    var storeID = await Stores.findStoreID(products.StoreName)
    var color = await Color.checkAvailableColor(products.Color)
    products["StoreID"] = storeID;
    var result =  await Products.create(products);
    var colorBody = {"Color" : products.Color};
    
    if(color === 0){
        await Color.createColorWithName(colorBody)
    }
    var colorID = await Color.findColorById(products.Color);
    await ProductsColor.createColor(colorID,result.id)

    return result;
}

exports.findAll = async (products) =>{
    return Products.findAll(products);
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

