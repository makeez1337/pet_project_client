import { IUser } from './userInterface';

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IRegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatedPassword: string;
}
