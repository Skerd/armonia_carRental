import {isBooleanZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {validateSelectForm} from "../../../../../core/utilities/zod/shared.validator";

/** Service dropdown, optionally one vehicle's, or only its scheduled repairs (a damage joins one). */
export function vehicleMaintenanceSelectFormSchema(languageCode: string, form: any = null) {
    return validateSelectForm(languageCode, form).extend({
        vehicle: isObjectIdZod(form?.["vehicleLabel"] || "vehicle", languageCode).optional(),
        scheduledRepairs: isBooleanZod(form?.["scheduledRepairsLabel"] || "scheduledRepairs", languageCode).optional(),
    });
}
