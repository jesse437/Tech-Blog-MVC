const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_login: {
            // string holds 256 bits of data
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull:false,
        },

        blog_title: {
            type: DataTypes.STRING,

        },
        blog_user: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        blog_content: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,

        },


    },


    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
);


module.exports = Blog;