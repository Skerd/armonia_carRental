import {z} from "zod";
import {isStringZod} from "../../../../../core/helpers/zodBuilder";

/** The CRUD edit route changes nothing for a reservation (it moves only through its actions); it only reads the id. */
export function noEditRentalReservationFormSchema(languageCode: string, form: any = null) {
    return z.looseObject({
        _id: isStringZod(form?.["_idLabel"] ?? "_id", languageCode),
    });
}
