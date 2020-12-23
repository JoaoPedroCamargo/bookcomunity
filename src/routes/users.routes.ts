import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  console.log('123');
  try {
    const { name, nickname, email, password, age } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      nickname,
      email,
      password,
      age,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
