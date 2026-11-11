import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {CitySimple} from "../../../../../core/dto/city.dto";
import type {WeeklyHoursSlot} from "../../../../../core/helpers/weeklyHours.schema-def";

export type RentalLocation = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    phone?: string;
    email?: string;
    address?: {
        country?: CountrySimple;
        city?: CitySimple;
        street?: string;
        postalCode?: string;
        latitude?: number;
        longitude?: number;
    };
    timezone: string;
    openingHours: WeeklyHoursSlot[];
    closures: {date: string; reason?: string}[];
    pickupAllowed: boolean;
    returnAllowed: boolean;
    oneWayFee?: number;
    isActive: boolean;
    /** The rental currency its amounts are in, added by the route (UX-07). */
    currency?: CurrencySimple;
};
