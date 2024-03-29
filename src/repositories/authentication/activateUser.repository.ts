import { IActivateUser } from "../../interfaces/authentication/activateUser.interface";

import { Knex } from "knex";

import { DatabaseSingleton } from "../../infra/database/databaseSingleton";

const knexInstance: Knex = DatabaseSingleton.getInstance();

export class ActivateUserRepository implements IActivateUser {
  public async activateUser(id: number): Promise<void> {
    await knexInstance("pacientes").update({ ativo: true }).where({ id });
  }
}
