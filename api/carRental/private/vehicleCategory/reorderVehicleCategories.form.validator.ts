import {z} from "zod";
import {getValidationMessage, isObjectIdZod, arrayMinMaxItemsZod} from "../../../../../core/helpers/zodBuilder";

const REORDER_MAX_CATEGORIES = 1000;

export function reorderVehicleCategoriesFormSchema(languageCode: string, form: any = null) {
    const label = form?.["orderedIdsLabel"] ?? "orderedIds";
    return z.object({
        orderedIds: arrayMinMaxItemsZod(label, 1, REORDER_MAX_CATEGORIES, languageCode, isObjectIdZod(label, languageCode))
            .refine((ids) => new Set(ids).size === ids.length, {message: getValidationMessage("array", "uniqueItems", [label], languageCode)}),
    });
}
