import { getRepository, Repository } from 'typeorm';

import IReagindGroupsRepository from '@modules/readingGroups/repositories/IReadingGroupsRepository';
import ICreateReadingGroupDTO from '@modules/readingGroups/dtos/ICreateReadingGroupDTO';

import ReadingGroup from '../entities/ReadingGroup';

class ReadingGroupsRepository implements IReagindGroupsRepository {
  private ormRepository: Repository<ReadingGroup>;

  constructor() {
    this.ormRepository = getRepository(ReadingGroup);
  }

  public async create({
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
  }: ICreateReadingGroupDTO): Promise<ReadingGroup> {
    const readingGroup = this.ormRepository.create({
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

    await this.ormRepository.save(readingGroup);

    return readingGroup;
  }
}

export default ReadingGroupsRepository;
