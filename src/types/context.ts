export type ContextType = {
  login: boolean;
  setLogin: (value: boolean) => void;
  accessToken: string;
  setAccessToken: (value: string) => void;
}

export const defaultContextType = {
  login: true,
  setLogin: () => {},
  accessToken: "",
  setAccessToken: () => {},
}