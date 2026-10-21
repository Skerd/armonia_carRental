import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleInsuranceSchemaDef} from "./vehicleInsurance.schema-def";

export function editVehicleInsuranceFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(VehicleInsuranceSchemaDef, languageCode, form, permissions, readPermissions);
}
