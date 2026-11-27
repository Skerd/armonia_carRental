import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {VehicleCategoryPriced} from "../../../../dto/vehicleCategory.dto";
import type {VehicleCatalogEntrySimple} from "../../../../dto/vehicleCatalog.dto";
import type {RentalLocationSimple} from "../../../../dto/rentalLocation.dto";
import type {RentalReservation} from "../rentalReservation/rentalReservation.dto";
import type {VehicleBlock} from "../vehicleBlock/vehicleBlock.dto";
import type {VehicleDamage} from "../vehicleDamage/vehicleDamage.dto";
import type {VehicleDocument} from "../vehicleDocument/vehicleDocument.dto";
import type {VehicleFine} from "../vehicleFine/vehicleFine.dto";
import type {VehicleInsurance} from "../vehicleInsurance/vehicleInsurance.dto";
import type {VehicleMaintenance} from "../vehicleMaintenance/vehicleMaintenance.dto";
import type {VehicleColor, VehicleReadiness, VehicleStatus} from "./vehicle.schema-def";
import type {VEHICLE_FUEL_TYPES, VEHICLE_TRANSMISSIONS} from "../vehicleCategory/vehicleCategory.schema-def";
import type {EffectiveRates, RateSeason} from "../../../../helpers/vehicleRates";

export type Vehicle = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    category?: VehicleCategoryPriced;
    /** Its make and model in the platform's vehicle catalog (D199); `make` and `model` carry their names. */
    catalogMake?: VehicleCatalogEntrySimple;
    catalogModel?: VehicleCatalogEntrySimple;
    make: string;
    model: string;
    year?: number;
    plate: string;
    vin?: string;
    color?: VehicleColor;
    homeLocation?: RentalLocationSimple;
    currentLocation?: RentalLocationSimple;
    readiness: VehicleReadiness;
    status: VehicleStatus;
    odometerKm?: number;
    notes?: string;
    images?: Media[];
    videos?: Media[];
    acquiredAt?: string;
    purchasePrice?: number;
    trackerId?: string;
    lastLatitude?: number;
    lastLongitude?: number;
    lastReportedAt?: string;
    /** Rented on its own (D198): customers can book this exact car. */
    listedAlone: boolean;
    listingTitle?: string;
    listingDescription?: string;
    listingImages?: Media[];
    /** Its own price list and deposit; absent ones come from the group. */
    dailyRate?: number;
    weekendDailyRate?: number;
    weeklyRate?: number;
    rateSeasons: (RateSeason & {currency?: CurrencySimple})[];
    depositAmount?: number;
    /** Its own specs where they differ from its category's (TD-B291). */
    seats?: number;
    doors?: number;
    luggage?: number;
    transmission?: (typeof VEHICLE_TRANSMISSIONS)[number];
    fuelType?: (typeof VEHICLE_FUEL_TYPES)[number];
    /** Set when the platform hid the car after a report (D191): gone from the rental site and the portal. */
    hiddenByPlatform: boolean;
    /** What booking this exact car costs: its own prices or its group's, added by the route. */
    rates?: EffectiveRates;
    /** From the latest completed service record; never written by a form. */
    nextServiceDueAt?: string;
    nextServiceDueKm?: number;
    /** The rental currency its amounts are in, added by the route (UX-07). */
    currency?: CurrencySimple;
    /**
     * The car's records, newest first, on its single read only (vehicle hub); each list is absent when the caller's
     * role cannot read that kind of record.
     */
    reservations?: RentalReservation[];
    damages?: VehicleDamage[];
    maintenance?: VehicleMaintenance[];
    documents?: VehicleDocument[];
    insurances?: VehicleInsurance[];
    fines?: VehicleFine[];
    blocks?: VehicleBlock[];
};

export type SetVehicleReadinessResult = {
    readiness: VehicleReadiness;
};
