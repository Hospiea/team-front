import { UserDto } from "./dto";

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

export type BoardList = {
  id?: number;
  title: string;
}

export type DetailTravel = {
  travel: BoardList;
  members: UserDto[];
}