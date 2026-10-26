import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {RentalPaymentPolicy} from "./carRentalConfig.schema-def";

export type CarRentalConfig = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    publicBookingEnabled: boolean;
    listedOnPortal: boolean;
    currency?: CurrencySimple;
    minRentalHours: number;
    maxRentalDays: number;
    minLeadTimeHours: number;
    maxAdvanceDays: number;
    turnaroundBufferMinutes: number;
    holdMinutes: number;
    lateGraceMinutes: number;
    paymentPolicy: RentalPaymentPolicy;
    freeCancellationHours: number;
    cancellationFeePercent: number;
    vatRate: number;
    pricesIncludeVat: boolean;
    guestBookingAllowed: boolean;
    termsVersion?: string;
    termsText?: string;
    notifyUsers?: SimpleBlankUser[];
};
