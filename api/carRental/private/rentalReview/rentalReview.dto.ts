import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {RentalReservationSimple} from "../../../../dto/rentalReservation.dto";

export type RentalReview = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    reservation?: RentalReservationSimple;
    rating: number;
    comment?: string;
    authorName: string;
    isPublished: boolean;
};
