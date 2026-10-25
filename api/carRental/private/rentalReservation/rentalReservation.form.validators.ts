import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {
    CancelRentalReservationFormDef,
    CreateRentalReservationFormDef,
    ExtendRentalReservationFormDef,
    HandoverRentalReservationFormDef,
    ReassignRentalVehicleFormDef,
    RecordRentalPaymentFormDef,
    ReturnRentalReservationFormDef,
} from "./rentalReservation.schema-def";

export function createRentalReservationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CreateRentalReservationFormDef, languageCode, form);
}

export function recordRentalPaymentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RecordRentalPaymentFormDef, languageCode, form);
}

export function handoverRentalReservationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(HandoverRentalReservationFormDef, languageCode, form);
}

export function returnRentalReservationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ReturnRentalReservationFormDef, languageCode, form);
}

export function cancelRentalReservationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CancelRentalReservationFormDef, languageCode, form);
}

export function reassignRentalVehicleFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ReassignRentalVehicleFormDef, languageCode, form);
}

export function extendRentalReservationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ExtendRentalReservationFormDef, languageCode, form);
}
