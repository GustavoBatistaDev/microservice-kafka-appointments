import { HttpResponse } from "controllers/protocols";
import { User } from "models/user";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<User[]>>;
}
