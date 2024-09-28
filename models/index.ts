import path from 'path'
import { Sequelize, Model } from 'Sequelize'
import dbConfig from '../config/config.json'
import generateUsersModel from './users'
import generateThumbups from './thumbups'

const env = process.env.NODE_ENV || 'development';
const config = (<any>dbConfig)[env] ?? dbConfig.development;
export const sequelize = new Sequelize(config.database, config.username, config.password, config);

export const models: any = {
  Users: generateUsersModel(sequelize),
  Thumbups: generateThumbups(sequelize)
};


Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

