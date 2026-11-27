import type {DeletedData, LifeCycleData, OwnershipData, RequestableData} from "../../../../../core/types/shared.types";
import type {VehicleCatalogEntrySimple} from "../../../../dto/vehicleCatalog.dto";
import type {VEHICLE_FUEL_TYPES, VEHICLE_TRANSMISSIONS} from "../vehicleCategory/vehicleCategory.schema-def";
import type {VehicleBodyStyle, VehicleCatalogLevel} from "./vehicleCatalog.schema-def";

/**
 * An entry of the platform's vehicle catalog (D199): `name` is in the reader's language. Only the single read, which the
 * edit form loads, adds `names` with every language.
 */
export type VehicleCatalogEntry = OwnershipData & DeletedData & LifeCycleData & RequestableData & {
    _id: string;
    name: string;
    names?: {en?: string; sq?: string; de?: string; fr?: string; it?: string};
    level: VehicleCatalogLevel;
    parentEntry?: VehicleCatalogEntrySimple;
    order: number;
    bodyStyle?: VehicleBodyStyle;
    seats?: number;
    doors?: number;
    fuelType?: (typeof VEHICLE_FUEL_TYPES)[number];
    transmission?: (typeof VEHICLE_TRANSMISSIONS)[number];
    yearFrom?: number;
    yearTo?: number;
};
