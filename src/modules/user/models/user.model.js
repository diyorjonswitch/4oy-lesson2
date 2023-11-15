import { DataTypes, Model } from "sequelize";
import hashPassword from 'bcrypt'
import { sequelize } from "../../../utils/db.connected.js";

export class User extends Model {}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'userlar'
});

User.beforeCreate(async (user) => {
    const hashedPassword = await hashPassword(user.password, 10);
    user.password = hashedPassword;
});
  