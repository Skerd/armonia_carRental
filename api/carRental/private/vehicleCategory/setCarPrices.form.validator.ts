import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SetCarPricesFormDef} from "./vehicleCategory.schema-def";

export function setCarPricesFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SetCarPricesFormDef, languageCode, form);
}
