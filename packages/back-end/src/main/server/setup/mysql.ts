import { createPool, Pool } from 'mysql';

export let pool: Pool;

const MysqlMaxConnections = 10;

export const createConnectionPool = () => {
	pool = createPool({
		connectionLimit: MysqlMaxConnections,
		host: process.env.MYSQL_HOST,
		port: Number(process.env.MYSQL_PORT),
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
	});
};

export const executeQuery = async <T>(sql: string, params: any[]) =>
	new Promise<T[]>((resolve, reject) =>
		pool.query(sql, params, (err, rows) => {
			if (err) {
				return reject(err);
			}
			resolve(rows);
		}),
	);
