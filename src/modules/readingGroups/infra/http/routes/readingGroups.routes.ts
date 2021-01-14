import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ReadingGroupsController from '../controllers/ReadingGroupsController';

const readingGroupsRouter = Router();
const readingGroupsController = new ReadingGroupsController();

readingGroupsRouter.use(ensureAuthenticated);

// readingGroupsRouter.get('/', async (request, response) => {
//   const readingGroups = await readingGroupsRepository.find();

//   return response.json(readingGroups);
// });

readingGroupsRouter.post('/', readingGroupsController.create);

export default readingGroupsRouter;
