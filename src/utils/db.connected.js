import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:toshmat11@localhost:5432/postgres',{
    dialect: 'postgres',
    logging: false
})
!(async () => {
    try {
        await sequelize.authenticate();
        console.log('db is connected succesfully !');
    } catch (error) {
        console.error(error.message);
    }
})();

export {sequelize}