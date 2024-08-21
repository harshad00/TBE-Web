export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UseUserReturnType {
  user: User | null;
  isAuth: boolean;
  loading: boolean;
}
