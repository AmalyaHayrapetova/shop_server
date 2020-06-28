const services = require("../services/products");
const url = require('url');


// Create a new product_color
exports.addProductWithColor = async (req, res) => {
  const result = await services.create(req.body);
  console.log("The result is: ", result);
  res.json(result);
};

//find all products
exports.findAll = async (req, res) => {
  const result = await services.findAll(req.body);
  res.json(result);
};

exports.findProductIDByName = async (req) => {
  const result = await services.findProductID(req);
  return result[0].id;
};

exports.findAllProductByCurrentType = async (req, res) => {
  const result = await services.findProductsOfCategory(req.params.id);
  res.json(result);
};

exports.findWomenProducts = async (req, res) => {
  const result = await services.findProductsOfSubCategory(
    req.params.id,
    "Women"
  );
  res.json(result);
};

exports.findMenProducts = async (req, res) => {
    const result = await services.findProductsOfSubCategory(
      req.params.id,
      "Men"
    );
    res.json(result);
  };
  
  exports.findBoysProducts = async (req, res) => {
    const result = await services.findProductsOfSubCategory(
      req.params.id,
      "Boy"
    );
    res.json(result);
  };

  exports.findGirlsProducts = async (req, res) => {
    const result = await services.findProductsOfSubCategory(
      req.params.id,
      "Girl"
    );
    res.json(result);
  };
  exports.filtrByGenderSubCategory = async(req,res) => {
      const result = await services.findProductsByGenderAndSubCategory(
        req.query.subcategory, req.query.gender,req.query.store
      );
      res.json(result)
  }

  
exports.findProductWithId = async(req,res) => {
  const result = await services.findProductById(req.query.id);
  res.json(result);
}

exports.filtrByGender = async(req,res) => {
  const result = await services.findProductByGender(req.params.id);
  res.json(result);

}