import { Dialect } from 'sequelize';

interface IdbConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
}

export const dbConfig: {
    development: IdbConfig;
    test: IdbConfig;
    production: IdbConfig;
} = {
    development: {
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        host: 'localhost',
        dialect: 'postgres',
    },
    test: {
        username: 'root',
        password: 'pass',
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: 'gglemhlwowzdva',
        password:
            '8d1a7a1d5eabe1678162a0e3c12e7fd655f6039b6da845827e18280f52ac5574',
        database: 'ddo8t5t0lqer3e',
        host: 'ec2-34-192-83-52.compute-1.amazonaws.com',
        dialect: 'postgres',
    },
};
