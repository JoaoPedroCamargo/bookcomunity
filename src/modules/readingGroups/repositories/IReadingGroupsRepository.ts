import ReadingGroup from '../infra/typeorm/entities/ReadingGroup';

import ICreateReadingGroupDTO from '../dtos/ICreateReadingGroupDTO';

export default interface IScientificProjectsRepository {
  create(data: ICreateReadingGroupDTO): Promise<ReadingGroup>;
}
