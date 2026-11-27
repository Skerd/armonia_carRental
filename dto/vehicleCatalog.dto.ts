/** A vehicle catalog entry as references carry it (D199): a car names its model, a model its make. */
export type VehicleCatalogEntrySimple = {
    _id: string;
    name: string;
};

/** What the server reads of a referenced entry to name it in the reader's language; `names` never leaves the server. */
export type VehicleCatalogEntrySimpleSource = VehicleCatalogEntrySimple & {
    names?: {en?: string; sq?: string; de?: string; fr?: string; it?: string};
};
