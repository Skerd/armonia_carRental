import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CarRentalConfigSchemaDef} from "./carRentalConfig.schema-def";

export function createCarRentalConfigFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CarRentalConfigSchemaDef, languageCode, form);
}
