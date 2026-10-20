import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CarRentalConfigSchemaDef} from "./carRentalConfig.schema-def";

export function editCarRentalConfigFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(CarRentalConfigSchemaDef, languageCode, form, permissions, readPermissions);
}
