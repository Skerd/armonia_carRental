import type {VEHICLE_DOCUMENT_STATUSES, VEHICLE_DOCUMENT_TYPES} from "../api/carRental/private/vehicleDocument/vehicleDocument.schema-def";

export type VehicleDocumentSimple = {
    _id: string;
    type: (typeof VEHICLE_DOCUMENT_TYPES)[number];
    documentNumber?: string;
    status: (typeof VEHICLE_DOCUMENT_STATUSES)[number];
};
