import { Sequelize, DataTypes, Model } from 'sequelize'

export class Users extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: {[key: string]: typeof Model}): any {
    // define association here
  }
}

export default function (sequelize: Sequelize): typeof Model {
  Users.init({
    uuid: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};