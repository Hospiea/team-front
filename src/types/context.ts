export type ContextType = {
  login: boolean;
  setLogin: (value: boolean) => void;
  accessToken: string;
  setAccessToken: (value: string) => void;
  userId: number;
  setUserId: (value: number) => void;
}

export const defaultContextType = {
  login: true,
  setLogin: () => {},
  accessToken: "",
  setAccessToken: () => {},
  userId: -1,
  setUserId: () => {},
}