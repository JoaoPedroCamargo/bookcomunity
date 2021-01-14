import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IReadingGroupsRepository from '@modules/readingGroups/repositories/IReadingGroupsRepository';
import ReadingGroupsRepository from '@modules/readingGroups/infra/typeorm/repositories/ReadingGroupsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IReadingGroupsRepository>(
  'ReadingGroupsRepository',
  ReadingGroupsRepository,
);
