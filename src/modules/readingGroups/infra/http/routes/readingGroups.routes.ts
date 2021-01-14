import { Router } from 'express';

import ReadingGroupsController from '../controllers/ReadingGroupsController';

const readingGroupsRouter = Router();
const readingGroupsController = new ReadingGroupsController();

// readingGroupsRouter.get('/', async (request, response) => {
//   const readingGroups = await readingGroupsRepository.find();

//   return response.json(readingGroups);
// });

readingGroupsRouter.post('/', readingGroupsController.create);

export default readingGroupsRouter;
