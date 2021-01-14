import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/error/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  nickname: string;
  email: string;
  password: string;
  age: Date;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    nickname,
    email,
    password,
    age,
  }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email adress already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = usersRepository.create({
      name,
      nickname,
      email,
      password: hashedPassword,
      age,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
