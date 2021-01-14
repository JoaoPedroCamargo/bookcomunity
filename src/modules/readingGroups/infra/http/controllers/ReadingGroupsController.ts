import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateReadingGroupService from '@modules/readingGroups/services/CreateReadingGroupService';

export default class ReadingGroupsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      admin_id,
      name,
      book,
      public_group,
      minimum_age_boolean,
      minimum_age,
      min_people,
      max_people,
      num_pages,
      time_next_meeting,
      start_date,
      rules,
      offense,
      offense_words,
      outOfDate_discussion,
      group_avatar,
    } = request.body;

    const createReadingGroupService = container.resolve(
      CreateReadingGroupService,
    );

    const readingGroup = await createReadingGroupService.execute({
      admin_id,
      name,
      book,
      public_group,
      minimum_age_boolean,
      minimum_age,
      min_people,
      max_people,
      num_pages,
      time_next_meeting,
      start_date,
      rules,
      offense,
      offense_words,
      outOfDate_discussion,
      group_avatar,
    });

    return response.json(readingGroup);
  }
}
