type Role = 'admin' | 'customer';

export interface IUser {
  name: string;
  lastname: string;
  email: string;
  remember: boolean;
  role: Role;
}

