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



export type Travel = {
  id: number;
  share_link: string;
  title: string;
}

export type DetailTravel = {
  travel: BoardList;
  members: UserDto[];
}


export type TravelDetail = {
  members: UserDto[],
  travel: Travel,
}