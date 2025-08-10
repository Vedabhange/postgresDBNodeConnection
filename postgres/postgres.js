import { Sequelize } from 'sequelize';
import { createUserModel } from '../model/userSchema.js';

const sequelize = new Sequelize('Employee_Test', 'postgres', 'Vedang@31', {
    host: 'localhost',
    dialect:  'postgres'
});

const UsersModel = createUserModel(sequelize);

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to PostgreSQL has been established successfully.');
        // UsersModel = await createUserModel(sequelize);
        await sequelize.sync();
        console.log('User model has been synchronized with the database.');
    } catch (error) {
        console.error('Unable to connect to the PostgreSQL database:', error);
    }
}

export { connection,
    UsersModel
}