import {z} from "zod";
import {isFormatZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

/** A calendar month, `YYYY-MM`. */
const MONTH_PATTERN = /^\d{4}-(0[1-9]|1[0-2])$/;

/** One business account's invoices issued in one calendar month of the company's time zone. */
export function rentalStatementFormSchema(languageCode: string, form: any = null) {
    return z.object({
        businessAccount: isObjectIdZod(form?.["businessAccountLabel"] ?? "businessAccount", languageCode),
        month: isFormatZod(form?.["monthLabel"] ?? "month", MONTH_PATTERN, "YYYY-MM", languageCode),
    });
}

export type RentalStatementFormType = z.infer<ReturnType<typeof rentalStatementFormSchema>>;
