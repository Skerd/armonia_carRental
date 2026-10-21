import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {validateSelectForm} from "../../../../../core/utilities/zod/shared.validator";

/** Booking dropdown, optionally limited to one vehicle (the damage report form). */
export function rentalReservationSelectFormSchema(languageCode: string, form: any = null) {
    return validateSelectForm(languageCode, form).extend({
        vehicle: isObjectIdZod(form?.["vehicleLabel"] || "vehicle", languageCode).optional(),
    });
}
