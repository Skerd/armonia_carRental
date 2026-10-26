import type {PortalCompanyCard} from "../../../../../core/api/portal/public/portal/portal.dto";
import type {RentalQuote, RentalStorefrontCategory} from "../rentalStorefront/rentalStorefront.response.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";

/** One company with cars free for the trip, at its location in the searched city. */
export type RentalPortalSearchResult = {
    company: PortalCompanyCard;
    location: {
        _id: string;
        name: string
    };
    pickupAt: string;
    returnAt: string;
    results: {
        category: RentalStorefrontCategory;
        quote: RentalQuote & {currency: CurrencySimple}
    }[];
};

export type RentalPortalSearchResponse = {
    data: RentalPortalSearchResult[];
    total: number;
};
