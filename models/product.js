module.exports = function(sequelize, DataTypes) {
    const product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        }
    });
    
    return product;
}