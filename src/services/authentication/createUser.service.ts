import { ICreateUserService } from "interfaces/services/authentication/ICreateUser.service";
import { ICreateUserRepository } from "../../interfaces/repositories/authentication/createUserRepository.interface";
import { IUserDTO } from "interfaces/user/userDTO.interface";
import { User } from "models/authentication/user";

export class CreateUserService implements ICreateUserService {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}
  public async createUser(UserDTO: IUserDTO): Promise<User> {
    const user = await this.createUserRepository.createUser(UserDTO);

    return user;
  }
}