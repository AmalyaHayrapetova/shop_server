const services = require("../services/store")

// Create  a new Store
exports.createStore = async (req, res) => {
    const result = await services.create(req.body);
    res.json(result);
};


