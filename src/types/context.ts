export type ContextType = {
  login: boolean;
  setLogin: (value: boolean) => void;
}

export const defaultContextType = {
  login: true,
  setLogin: () => {}
}