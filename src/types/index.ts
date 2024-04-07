export interface IAuthRequest {
  username: string;
  password: string;
}

export interface IAuthResponse {
  id: number;
  username: string;
  token: string;
}
