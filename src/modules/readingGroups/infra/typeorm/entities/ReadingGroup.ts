import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('reading_groups')
class ScientificProject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  admin_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'admin_id' })
  admin: User;

  @Column()
  name: string;

  @Column()
  book: string;

  @Column()
  public_group: boolean;

  @Column()
  minimum_age_boolean: boolean;

  @Column()
  minimum_age: number;

  @Column()
  min_people: number;

  @Column()
  max_people: number;

  @Column()
  num_pages: number;

  @Column()
  time_next_meeting: number;

  @Column()
  start_date: Date;

  @Column()
  rules: string;

  @Column()
  offense: boolean;

  @Column()
  offense_words: string;

  @Column()
  outOfDate_discussion: string;

  @Column()
  group_avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ScientificProject;
