import { Dialect } from "sequelize";

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
		username: "postgres",
		password: "postgres",
		database: "postgres",
		host: "localhost",
		dialect: "postgres",
	},
	test: {
		username: "root",
		password: "pass",
		database: "database_test",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	production: {
		username: "root",
		password: "pass",
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql",
	},
};
