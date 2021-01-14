import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import readingGroupsRouter from '@modules/readingGroups/infra/http/routes/readingGroups.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/readingGroups', readingGroupsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
