import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";

/** A reporting window of local dates, optionally one branch. */
export const RentalReportsFormDef = {
    from:     {type: "string", required: true, format: "localDate"},
    to:       {type: "string", required: true, format: "localDate"},
    location: {type: "objectId", required: false},
} as const;
export type RentalReportsFormType = InferCreateForm<typeof RentalReportsFormDef>;

export function rentalReportsFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RentalReportsFormDef, languageCode, form);
}

export type RentalReportVehicle = {
    vehicleId: string;
    plate: string;
    categoryName: string;
    branchName: string;
    rentedHours: number;
    availableHours: number;
    utilisation: number;
    revenue: number;
    /** Completed services other than repairs. */
    maintenanceCost: number;
    /** Completed repair records: a damage's cost is the cost of its repair. */
    repairCost: number;
    insurancePremium: number;
    /** Fines the company paid and kept (no booking to recharge). */
    finesCost: number;
    /** Damage costs got back: charged to customers plus paid by insurers. */
    recovered: number;
    purchasePrice: number;
    /** Revenue in the window divided by the purchase price. Omitted when the price is unknown. */
    payback?: number;
};

export type RentalReportGroup = {
    name: string;
    utilisation: number;
    revenue: number;
};

/** Bookings that started in the window, of a class ("or similar") or of an exact car rented on its own (D198). */
export type RentalReportSaleKind = {
    kind: "class" | "exact";
    bookings: number;
    revenue: number;
};

export type RentalReportsResponse = {
    data: {
        /** The rental currency every amount is in (UX-07); absent until the company sets up its rental settings. */
        currency?: CurrencySimple;
        from: string;
        to: string;
        timezone: string;
        summary: {
            utilisation: number;
            revenue: number;
            averageDailyRate: number;
            revenuePerAvailableCarDay: number;
            leadTimeDays: number;
            cancellationRate: number;
            noShowRate: number;
            searches: number;
            unavailableSearches: number;
        };
        byVehicle: RentalReportVehicle[];
        byCategory: RentalReportGroup[];
        byBranch: RentalReportGroup[];
        bySaleKind: RentalReportSaleKind[];
    };
};
