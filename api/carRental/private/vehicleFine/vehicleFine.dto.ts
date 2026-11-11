import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {VehicleSimple} from "../../../../dto/vehicle.dto";
import type {RentalReservationSimple} from "../../../../dto/rentalReservation.dto";
import type {VehicleTransferSimple} from "../../../../dto/vehicleTransfer.dto";
import type {VEHICLE_FINE_TYPES, VEHICLE_FINE_STATUSS} from "./vehicleFine.schema-def";

export type VehicleFine = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    reference: string;
    vehicle?: VehicleSimple;
    offenceAt: string;
    type: (typeof VEHICLE_FINE_TYPES)[number];
    authority: string;
    amount: number;
    place?: string;
    dueDate?: string;
    status?: (typeof VEHICLE_FINE_STATUSS)[number];
    reservation?: RentalReservationSimple;
    driverName?: string;
    chargedAmount?: number;
    /** The staff transfer that had the car at the time, when no booking did. */
    transfer?: VehicleTransferSimple;
    paidAt?: string;
    paidAmount?: number;
    paymentReference?: string;
    attachments?: Media[];
    notes?: string;
    /** The rental currency its amounts are in, added by the route (UX-07). */
    currency?: CurrencySimple;
};
