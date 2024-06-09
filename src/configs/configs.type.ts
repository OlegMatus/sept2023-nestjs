export type Config = {
  app: AppConfig;
  database: DatabaseConfig;
  redis: RedisConfig;
  sentry: SentryConfig;
};

export type AppConfig = {
  port: number;
  host: string;
};

export type DatabaseConfig = {
  host: string;

  port: number;
  user: string;
  password: string;
  dbName: string;
};

export type RedisConfig = {
  port: number;
  host: string;
  password: string;
};

export type SentryConfig = {
  dsn: string;
  debug: boolean;
  env: string;
};
