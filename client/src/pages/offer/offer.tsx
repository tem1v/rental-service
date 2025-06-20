import React from "react";
import { FullOffer } from "../../types/offer";
import { useParams } from "react-router-dom";
import { NotFound } from "../not-found/not-found";
import { Logo } from "../../components/logo/logo";
import { ReviewForm } from "../../components/review-form/review-form";

type OfferProps = {
	offers: FullOffer[];
};

function Offer({ offers }: OfferProps) {
	const params = useParams();
	const offer = offers.find((item) => item.id === params.id);
	if(!offer){
		return <NotFound/>
	}
    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Logo></Logo>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item user">
                                    <a
                                        className="header__nav-link header__nav-link--profile"
                                        href="#"
                                    >
                                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                                        <span className="header__user-name user__name">
                                            Myemail@gmail.com
                                        </span>
                                        <span className="header__favorite-count">
                                            3
                                        </span>
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a className="header__nav-link" href="#">
                                        <span className="header__signout">
                                            Sign out
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--offer">
                <section className="offer">
                    <div className="offer__gallery-container container">
                        <div className="offer__gallery">
                            {offer.images.map((item) => (
                                <div
                                    className="offer__image-wrapper"
                                    key={item}
                                >
                                    <img
                                        className="offer__image"
                                        src={item}
                                        alt="Photo studio"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="offer__container container">
                        <div className="offer__wrapper">
                            {offer.isPremium && (
                                <div className="offer__mark">
                                    <span>Premium</span>
                                </div>
                            )}
                            <div className="offer__name-wrapper">
                                <h1 className="offer__name">{offer.title}</h1>
                                <button
                                    className="offer__bookmark-button button"
                                    type="button"
                                >
                                    <svg
                                        className="offer__bookmark-icon"
                                        width="31"
                                        height="33"
                                    >
                                        <use xlinkHref="#icon-bookmark"></use>
                                    </svg>
                                    <span className="visually-hidden">
                                        To bookmarks
                                    </span>
                                </button>
                            </div>
                            <div className="offer__rating rating">
                                <div className="offer__stars rating__stars">
                                    <span style={{ width: "80%" }}></span>
                                    <span className="visually-hidden">
                                        Rating
                                    </span>
                                </div>
                                <span className="offer__rating-value rating__value">
                                    {offer.rating}
                                </span>
                            </div>
                            <ul className="offer__features">
                                <li className="offer__feature offer__feature--entire">
                                    {offer.type}
                                </li>
                                <li className="offer__feature offer__feature--bedrooms">
                                    {offer.bedrooms} Bedroom
                                    {offer.bedrooms > 1 ? "s" : ""}
                                </li>
                                <li className="offer__feature offer__feature--adults">
                                    Max {offer.maxAdults} adult
                                    {offer.maxAdults > 1 ? "s" : ""}
                                </li>
                            </ul>
                            <div className="offer__price">
                                <b className="offer__price-value">
                                    &euro;{offer.price}
                                </b>
                                <span className="offer__price-text">
                                    &nbsp;night
                                </span>
                            </div>
                            <div className="offer__inside">
                                <h2 className="offer__inside-title">
                                    What&apos;s inside
                                </h2>
                                <ul className="offer__inside-list">
                                    {offer.goods.map((item, index) => (
                                        <li
                                            className="offer__inside-item"
                                            key={index}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="offer__host">
                                <h2 className="offer__host-title">
                                    Meet the host
                                </h2>
                                <div className="offer__host-user user">
                                    <div
                                        className={`offer__avatar-wrapper ${
                                            offer.host.isPro
                                                ? "offer__avatar-wrapper--pro"
                                                : ""
                                        } user__avatar-wrapper`}
                                    >
                                        <img
                                            className="offer__avatar user__avatar"
                                            src={offer.host.avatarUrl}
                                            width="74"
                                            height="74"
                                            alt="Host avatar"
                                        />
                                    </div>
                                    <span className="offer__user-name">
                                        {offer.host.name}
                                    </span>
                                    {offer.host.isPro && (
                                        <span className="offer__user-status">
                                            Pro
                                        </span>
                                    )}
                                </div>
                                <div className="offer__description">
                                    <p className="offer__text">
                                        {offer.description}
                                    </p>
                                </div>
                            </div>
                            <section className="offer__reviews reviews">
                                <h2 className="reviews__title">
                                    Reviews &middot;{" "}
                                    <span className="reviews__amount">1</span>
                                </h2>
                                <ul className="reviews__list">
                                    <li className="reviews__item">
                                        <div className="reviews__user user">
                                            <div className="reviews__avatar-wrapper user__avatar-wrapper">
                                                <img
                                                    className="reviews__avatar user__avatar"
                                                    src="img/avatar-max.jpg"
                                                    width="54"
                                                    height="54"
                                                    alt="Reviews avatar"
                                                />
                                            </div>
                                            <span className="reviews__user-name">
                                                Max
                                            </span>
                                        </div>
                                        <div className="reviews__info">
                                            <div className="reviews__rating rating">
                                                <div className="reviews__stars rating__stars">
                                                    <span
                                                        style={{ width: "80%" }}
                                                    ></span>
                                                    <span className="visually-hidden">
                                                        Rating
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="reviews__text">
                                                A quiet cozy and picturesque
                                                that hides behind a a river by
                                                the unique lightness of
                                                Amsterdam. The building is green
                                                and from 18th century.
                                            </p>
                                            <time
                                                className="reviews__time"
                                                dateTime="2019-04-24"
                                            >
                                                April 2019
                                            </time>
                                        </div>
                                    </li>
                                </ul>
                                <ReviewForm />
                            </section>
                        </div>
                    </div>
                    <section className="offer__map map"></section>
                </section>
                <div className="container">
                    <section className="near-places places">
                        <h2 className="near-places__title">
                            Other places in the neighbourhood
                        </h2>
                        <div className="near-places__list places__list">
                            {[
                                {
                                    price: "80",
                                    name: "Wood and stone place",
                                    type: "Private room",
                                    img: "room.jpg",
                                    active: true,
                                },
                                {
                                    price: "132",
                                    name: "Canal View Prinsengracht",
                                    type: "Apartment",
                                    img: "apartment-02.jpg",
                                    active: false,
                                },
                                {
                                    price: "180",
                                    name: "Nice, cozy, warm big bed apartment",
                                    type: "Apartment",
                                    img: "apartment-03.jpg",
                                    active: false,
                                    premium: true,
                                },
                            ].map((place, index) => (
                                <article
                                    className="near-places__card place-card"
                                    key={index}
                                >
                                    {place.premium && (
                                        <div className="place-card__mark">
                                            <span>Premium</span>
                                        </div>
                                    )}
                                    <div className="near-places__image-wrapper place-card__image-wrapper">
                                        <a href="#">
                                            <img
                                                className="place-card__image"
                                                src={`img/${place.img}`}
                                                width="260"
                                                height="200"
                                                alt="Place image"
                                            />
                                        </a>
                                    </div>
                                    <div className="place-card__info">
                                        <div className="place-card__price-wrapper">
                                            <div className="place-card__price">
                                                <b className="place-card__price-value">
                                                    &euro;{place.price}
                                                </b>
                                                <span className="place-card__price-text">
                                                    &#47;&nbsp;night
                                                </span>
                                            </div>
                                            <button
                                                className={`place-card__bookmark-button ${
                                                    place.active
                                                        ? "place-card__bookmark-button--active"
                                                        : ""
                                                } button`}
                                                type="button"
                                            >
                                                <svg
                                                    className="place-card__bookmark-icon"
                                                    width="18"
                                                    height="19"
                                                >
                                                    <use xlinkHref="#icon-bookmark"></use>
                                                </svg>
                                                <span className="visually-hidden">
                                                    {place.active
                                                        ? "In bookmarks"
                                                        : "To bookmarks"}
                                                </span>
                                            </button>
                                        </div>
                                        <div className="place-card__rating rating">
                                            <div className="place-card__stars rating__stars">
                                                <span
                                                    style={{
                                                        width: `${
                                                            place.premium
                                                                ? "100%"
                                                                : "80%"
                                                        }`,
                                                    }}
                                                ></span>
                                                <span className="visually-hidden">
                                                    Rating
                                                </span>
                                            </div>
                                        </div>
                                        <h2 className="place-card__name">
                                            <a href="#">{place.name}</a>
                                        </h2>
                                        <p className="place-card__type">
                                            {place.type}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export { Offer };
