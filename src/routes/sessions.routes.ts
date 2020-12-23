import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      age: user.age,
      avatar: user.avatar,
    };

    return response.json({ userWithoutPassword, token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
