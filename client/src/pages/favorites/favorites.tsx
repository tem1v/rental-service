import { Logo } from "../../components/logo/logo";
import { OffersList } from "../../types/offer";
import { FavoriteCardList } from "../../components/favorite-card-list/favorite-card-list";

type FavoritesPageProps = {
    offersList: OffersList[];
};

function Favorites({ offersList }: FavoritesPageProps) {
    const favoriteOffers = offersList.filter((offer) => offer.isFavorite);

    const groupedByCity = favoriteOffers.reduce<Record<string, OffersList[]>>(
        (acc, offer) => {
            const city = offer.city.name;
            if (!acc[city]) {
                acc[city] = [];
            }
            acc[city].push(offer);
            return acc;
        },
        {}
    );

    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Logo />
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
                                            {favoriteOffers.length}
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

            <main className="page__main page__main--favorites">
                <div className="page__favorites-container container">
                    <section className="favorites">
                        <h1 className="favorites__title">Saved listing</h1>
                        {/* Передаём сгруппированные офферы в твой компонент */}
                        <FavoriteCardList groupedOffers={groupedByCity} />
                    </section>
                </div>
            </main>

            <footer className="footer container">
                <Logo />
            </footer>
        </div>
    );
}

export { Favorites };
