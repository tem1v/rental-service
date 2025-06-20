import { AppRoute } from "../../const";
import { MainPage } from "../../pages/main-page/main-page";
import { Login } from "../../pages/login/login";
import { Favorites } from "../../pages/favorites/favorites";
import { Offer } from "../../pages/offer/offer";
import { NotFound } from "../../pages/not-found/not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../private-route/private-route";
import { AuthorizationStatus } from "../../const";
import React, { JSX } from "react";
import { FullOffer } from "../../types/offer";
import { OffersList } from "../../types/offer";
import { offersList } from "../../mocks/offers-list";

type AppMainPageProps = {
    rentalOffersCount: number;
	offers: FullOffer[];
	offersList: OffersList[];
}

function App({rentalOffersCount, offers}: AppMainPageProps): JSX.Element{

	return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.MainPage}
                    element={<MainPage rentalOffersCount={rentalOffersCount} offersList  ={offersList}/>}
                />
                <Route path={AppRoute.Login} element={<Login />} />
                <Route
                    path={AppRoute.Favorites}
                    element={
                        <PrivateRoute
                            authorizationStatus={AuthorizationStatus.NoAuth}
                        >
                            <Favorites />
                        </PrivateRoute>
                    }
                />

                <Route path={`${AppRoute.Offer}/:id`} element={<Offer offers={offers}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export {App};