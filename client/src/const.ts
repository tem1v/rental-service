import { MainPage } from "./pages/main-page/main-page";
import {Offer} from "./pages/offer/offer";
import { Login } from "./pages/login/login";
import { Favorites } from "./pages/favorites/favorites";

export const AppRoute = {
	MainPage: '/',
	Login: '/login',
	Favorites: '/favorites',
	Offer: '/offer/:id'
} as const;

export const AuthorizationStatus = {
	Auth: 'AUTH',
	NoAuth: 'NO_AUTH',
	Unknown: 'UNKNOWN',
}

