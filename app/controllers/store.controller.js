const services = require("../services/store")

// Create  a new Store
exports.createStore = async (req, res) => {
    const result = await services.create(req.body);    
    console.log("The result is: ", result);
    res.json(result);
};

//get all stores
exports.findAllStores = async (req, res) => {
    const result = await services.findAll(req.body);
    res.json(result);
}


// Update store info
exports.updateStoreInfo = async (req, res) => {
    const result = await services.update(req.body);
    res.json(result);
};


//find store by name
exports.getStore = async (req, res) => {
    console.log("Query is",req)
    console.log("Query is",req.query.id)
    const result = await services.findOne(req.query.id);
    res.json(result);
};



