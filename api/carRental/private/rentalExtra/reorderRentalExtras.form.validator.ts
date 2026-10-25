import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

const REORDER_MAX_EXTRAS = 1000;

export function reorderRentalExtrasFormSchema(languageCode: string, form: any = null) {
    return z.object({
        orderedIds: z.array(isObjectIdZod(form?.["orderedIdsLabel"] ?? "orderedIds", languageCode))
            .min(1)
            .max(REORDER_MAX_EXTRAS)
            .refine((ids) => new Set(ids).size === ids.length),
    });
}
