export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  nickname: string;
  age: Date;
  avatar: string | undefined;
}
