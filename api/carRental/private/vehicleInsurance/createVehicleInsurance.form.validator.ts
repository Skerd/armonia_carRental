import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {VehicleInsuranceSchemaDef} from "./vehicleInsurance.schema-def";

export function createVehicleInsuranceFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(VehicleInsuranceSchemaDef, languageCode, form);
}
