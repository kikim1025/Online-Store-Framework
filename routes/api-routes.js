const Route = require('./Route');
const models = require('../models');

module.exports = function(app) {
    const product = new Route("product", app, models.Product);
    product.findAll();
    product.find("id");
    product.create();
    product.delete("id");
    product.update("id");
}