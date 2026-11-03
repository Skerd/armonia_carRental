import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {validateSelectForm} from "../../../../../core/utilities/zod/shared.validator";

/** Policy dropdown, optionally limited to one vehicle (the damage claim). */
export function vehicleInsuranceSelectFormSchema(languageCode: string, form: any = null) {
    return validateSelectForm(languageCode, form).extend({
        vehicle: isObjectIdZod(form?.["vehicleLabel"] || "vehicle", languageCode).optional(),
    });
}
