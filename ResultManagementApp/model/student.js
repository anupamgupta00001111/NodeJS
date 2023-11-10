// Importing Sequelize
const { Sequelize, DataTypes } = require('sequelize')

const student_sequelize = new Sequelize ('result_management_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});


// Student table
const student = student_sequelize.define('students', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    roll_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    marks: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, { timestamps: false
});


// exporting the student table and sequelize
module.exports = { student, student_sequelize};