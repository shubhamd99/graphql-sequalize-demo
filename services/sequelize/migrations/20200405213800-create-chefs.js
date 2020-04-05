module.exports.up = (queryInterface, DataTypes) => {
    // creating a table
    return queryInterface.createTable("chefs",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            deletedAt: {
                allowNull: true,
                type: DataTypes.DATE
            }
        },
        {
            chartset: "utf8"
        }
    );
};


module.exports.down = (queryInterface) => {
    // drop a table
    return queryInterface.dropTable("chefs");
};