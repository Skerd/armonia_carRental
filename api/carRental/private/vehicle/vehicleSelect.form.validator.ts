import {isBooleanZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {validateSelectForm} from "../../../../../core/utilities/zod/shared.validator";

/**
 * Vehicle dropdown, optionally limited to one category (the staff booking form).
 * Lists only active vehicles unless `includeInactive` (fleet records also cover cars in maintenance).
 */
export function vehicleSelectFormSchema(languageCode: string, form: any = null) {
    return validateSelectForm(languageCode, form).extend({
        category: isObjectIdZod(form?.["categoryLabel"] || "category", languageCode).optional(),
        includeInactive: isBooleanZod(form?.["includeInactiveLabel"] || "includeInactive", languageCode).optional(),
    });
}
