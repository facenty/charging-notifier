import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { host, port, database, user, password }: dbConfig = config.get('dbConfig');

export const dbConnection = {
  url: `mongodb://${user}:${password}@${host}:${port}/${database}?authSource=admin`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
