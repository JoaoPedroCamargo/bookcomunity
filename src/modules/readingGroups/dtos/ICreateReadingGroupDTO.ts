export default interface ICreateReadingGroupDTO {
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
