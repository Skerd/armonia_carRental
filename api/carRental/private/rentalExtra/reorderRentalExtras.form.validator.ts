import {z} from "zod";
import {getValidationMessage, isObjectIdZod, arrayMinMaxItemsZod} from "../../../../../core/helpers/zodBuilder";

const REORDER_MAX_EXTRAS = 1000;

export function reorderRentalExtrasFormSchema(languageCode: string, form: any = null) {
    const label = form?.["orderedIdsLabel"] ?? "orderedIds";
    return z.object({
        orderedIds: arrayMinMaxItemsZod(label, 1, REORDER_MAX_EXTRAS, languageCode, isObjectIdZod(label, languageCode))
            .refine((ids) => new Set(ids).size === ids.length, {message: getValidationMessage("array", "uniqueItems", [label], languageCode)}),
    });
}
