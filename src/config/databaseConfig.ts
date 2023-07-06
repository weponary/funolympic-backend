export const databaseConfig = {
  databaseUser: process.env.POSTGRES_USER ?? "postgres",
  databasePassword: process.env.POSTGRES_PASSWORD ?? "admin",
  databaseName: process.env.POSTGRES_DB ?? "funolympic",
  databaseHost: process.env.POSTGRES_HOST ?? "localhost",
};
