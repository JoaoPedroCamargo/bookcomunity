import { injectable, inject } from 'tsyringe';

import ReadingGroup from '../infra/typeorm/entities/ReadingGroup';
import IReadingGroupsRepository from '../repositories/IReadingGroupsRepository';

interface IRequest {
  admin_id: string;
  name: string;
  book: string;
  public_group: boolean;
  minimum_age_boolean: boolean;
  minimum_age: number | undefined;
  min_people: number;
  max_people: number;
  num_pages: number;
  time_next_meeting: number;
  start_date: Date;
  rules: string | undefined;
  offense: boolean;
  offense_words: string | undefined;
  outOfDate_discussion: boolean;
  group_avatar: string | undefined;
}

@injectable()
class CreateReadingGroupService {
  constructor(
    @inject('ReadingGroupsRepository')
    private readingGroupsRepository: IReadingGroupsRepository,
  ) {}

  public async execute({
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
  }: IRequest): Promise<ReadingGroup> {
    const readingGroup = await this.readingGroupsRepository.create({
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

    return readingGroup;
  }
}

export default CreateReadingGroupService;
