export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
}
