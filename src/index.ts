import express from "express";

import { EventEmitter } from "events";
EventEmitter.defaultMaxListeners = 15;

import { config } from "dotenv";
import { PostgresGetUsersRepository } from "./repositories/get-users/get-users";
import { GetUsersController } from "./controllers/get-users/get-users";
import { CreateUserController } from "./controllers/create-user/create-user";
import { CreateUserRepository } from "./repositories/create-user/create-user";

config();

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const postgresGetUsersRepository = new PostgresGetUsersRepository();
  const getUsersController = new GetUsersController(postgresGetUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  return res.status(statusCode).json(body);
});

app.post("/users", async (req, res) => {
  const createUserRepository = new CreateUserRepository();
  const createUsersController = new CreateUserController(createUserRepository);

  const { statusCode, body } = await createUsersController.handle({
    body: req.body,
  });

  return res.status(statusCode).json(body);
});

app.listen(process.env.PORT);