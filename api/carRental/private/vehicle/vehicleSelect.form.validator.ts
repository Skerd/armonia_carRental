import {isBooleanZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {validateSelectForm} from "../../../../../core/utilities/zod/shared.validator";

export function vehicleSelectFormSchema(languageCode: string, form: any = null) {
    return validateSelectForm(languageCode, form).extend({
        category: isObjectIdZod(form?.["categoryLabel"] || "category", languageCode).optional(),
        includeInactive: isBooleanZod(form?.["includeInactiveLabel"] || "includeInactive", languageCode).optional(),
    });
}
