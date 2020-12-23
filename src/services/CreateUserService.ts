import { getRepository } from 'typeorm';

import User from '../models/User';

interface Request {
  name: string;
  nickname: string;
  email: string;
  password: string;
  age: Date;
}

class CreateUserService {
  public async execute({
    name,
    nickname,
    email,
    password,
    age,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email adress already used.');
    }

    const user = usersRepository.create({
      name,
      nickname,
      email,
      password,
      age,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
