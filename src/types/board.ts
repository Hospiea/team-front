export interface BoardEnrollment {
  name: string;
  title: string;
  content: string;
  user_id?: number;
}

export const defaultBoardEnrollment: BoardEnrollment = {
  name: "",
  title: "",
  content: "",
};