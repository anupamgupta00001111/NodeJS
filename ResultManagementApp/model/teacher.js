// Importing sequelize
const { Sequelize, DataTypes } = require('sequelize')

const teacher_sequelize = new Sequelize ('result_management_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

// Teacher table
const teacher = teacher_sequelize.define('teachers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: false
});


// Exporting teacher table and sequelize
module.exports = { teacher, teacher_sequelize};