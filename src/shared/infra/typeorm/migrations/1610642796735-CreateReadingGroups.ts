import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateReadingGroups1610642796735
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.createTable(
      new Table({
        name: 'reading_groups',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'admin_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'book',
            type: 'varchar',
          },
          {
            name: 'public_group',
            type: 'boolean',
          },
          {
            name: 'minimum_age_boolean',
            type: 'boolean',
          },
          {
            name: 'minimum_age',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'min_people',
            type: 'integer',
          },
          {
            name: 'max_people',
            type: 'integer',
          },
          {
            name: 'num_pages',
            type: 'integer',
          },
          {
            name: 'time_next_meeting',
            type: 'integer',
          },
          {
            name: 'start_date',
            type: 'timestamp',
          },
          {
            name: 'rules',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'offense',
            type: 'boolean',
          },
          {
            name: 'offense_words',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'outOfDate_discussion',
            type: 'boolean',
          },
          {
            name: 'group_avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'group_link',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'reading_groups',
      new TableForeignKey({
        name: 'readingGroupAdmin',
        columnNames: ['admin_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('reading_groups', 'readingGroupAdmin');

    await queryRunner.dropTable('reading_groups');
  }
}
