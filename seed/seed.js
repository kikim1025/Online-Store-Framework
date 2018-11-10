const db = require('../models');

db.sequelize.sync().then(function() {
    db.Product.bulkCreate([
        {
            name: "product1",
            department: "dep1",
            price: "3",
            quantity: 10
        },
        {
            name: "product2",
            department: "dep1",
            price: "2",
            quantity: 10
        },
        {
            name: "product3",
            department: "dep2",
            price: "1",
            quantity: 10
        }
    ]).then(function() {
        console.log('Data successfully added!');
    }).catch(function(err) {
        console.log(err);
    });
});