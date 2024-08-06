const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comments.init(
    {
        id: {
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        body: {
            // string holds 256 bits of data
            type: DataTypes.TEXT,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.TEXT,
            allowNull:false,
            references: {
                model: 'post',
                key: 'id'
            }
        },

        user_id: {
            type: DataTypes.TEXT,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }

        },

    },


    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);


module.exports = Comment;