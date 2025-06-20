import { OffersList } from "../../types/offer";
import { FavoriteCard } from "../favorite-card/favorite-card";

type FavoritesCardListProps = {
    groupedOffers: Record<string, OffersList[]>;
};  

function FavoriteCardList({ groupedOffers }: FavoritesCardListProps) {
    return (
        <ul className="favorites__list">
            {Object.entries(groupedOffers).map(([city, offers]) => (
                <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                            <a className="locations__item-link" href="#">
                                <span>{city}</span>
                            </a>
                        </div>
                    </div>

                    <div className="favorites__places">
                        {offers.map((offer) => (
                            <FavoriteCard
                                key={offer.id}
                                id={offer.id}
                                title={offer.title}
                                type={offer.type}
                                price={offer.price}
                                previewImage={offer.previewImage}
                                isPremium={offer.isPremium}
                                rating={offer.rating}
                            />
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    );
}
  

export { FavoriteCardList };
