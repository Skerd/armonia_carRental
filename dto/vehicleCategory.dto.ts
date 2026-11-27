export type VehicleCategorySimple = {
    _id: string;
    name: string;
};

/** A car's category with the prices a car without its own inherits (D198, TD-F173): its sheet shows them. */
export type VehicleCategoryPriced = VehicleCategorySimple & {
    dailyRate: number;
    weekendDailyRate?: number;
    weeklyRate?: number;
    depositAmount?: number;
};
