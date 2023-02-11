export type Nullable<T> = null | T

export interface ICookieOptions {
	path?: string;
	domain?: string;
	expires?: Date | string;
	maxAge?: number;
	secure?: boolean;
	encode?: boolean;
}
