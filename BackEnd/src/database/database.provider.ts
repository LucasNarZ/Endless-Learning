import { Sequelize } from 'sequelize-typescript';
import { Post } from '../Post/post.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'postgres',
                port: 5432,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB
            })
            sequelize.addModels([Post])
            await sequelize.sync()
            return sequelize
        }
    }
]