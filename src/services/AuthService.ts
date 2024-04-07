import { IAuthRequest, IAuthResponse } from '@/types';

export class AuthService {
  static async signin({ username, password }: IAuthRequest): Promise<IAuthResponse> {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const body: IAuthResponse = await res.json();
    localStorage.setItem('accessToken', body.token);
    return body;
  }

  static async me() {
    const res = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
    const body = await res.json();
    return body;
  }
}
