import { DataTypes } from "sequelize";


export const createUserModel = (sequelize) => {
    const User = sequelize.define("Users", {
});
return User;
}