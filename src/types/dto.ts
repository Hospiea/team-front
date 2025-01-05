export interface KakaoResponse {
	id: number;
	connected_at: string;
}

export interface UserDto {
	name: string;
	email: string;
	age: number;
	gender?: string;
}

export interface LoginRequest {
	user_info?: UserDto;
	access_token: string;
	refresh_token: string;
}

