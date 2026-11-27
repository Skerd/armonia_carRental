/**
 * A car rented on its own (D198) is priced from its own price list when it has one, otherwise from its group's.
 * The list goes as a whole: a car with its own day price never takes the group's weekend, week or season prices,
 * which were set against the group's day price (a €120 car must not drop to the group's €62 summer price).
 * The deposit is inherited on its own. Shared by the server's quotes and the panel's price card.
 */

export type RateSeason = {startDate: string; endDate: string; dailyRate: number};

export type RateList = {
    dailyRate: number;
    weekendDailyRate?: number;
    weeklyRate?: number;
    rateSeasons: RateSeason[];
    depositAmount?: number;
};

export type OwnRates = {
    dailyRate?: number;
    weekendDailyRate?: number;
    weeklyRate?: number;
    rateSeasons?: RateSeason[];
    depositAmount?: number;
};

export type EffectiveRates = RateList & {
    /** The day, weekend, week and season prices are the car's own. */
    ownPrices: boolean;
    /** The deposit is the car's own. */
    ownDeposit: boolean;
};

const isSet = (value: number | null | undefined): value is number => typeof value === "number";

export function effectiveVehicleRates(group: RateList, car: OwnRates): EffectiveRates {
    const ownPrices = isSet(car.dailyRate);
    const ownDeposit = isSet(car.depositAmount);
    const prices = ownPrices
        ? {
              dailyRate: car.dailyRate as number,
              ...(isSet(car.weekendDailyRate) ? {weekendDailyRate: car.weekendDailyRate} : {}),
              ...(isSet(car.weeklyRate) ? {weeklyRate: car.weeklyRate} : {}),
              rateSeasons: car.rateSeasons ?? [],
          }
        : {
              dailyRate: group.dailyRate,
              ...(isSet(group.weekendDailyRate) ? {weekendDailyRate: group.weekendDailyRate} : {}),
              ...(isSet(group.weeklyRate) ? {weeklyRate: group.weeklyRate} : {}),
              rateSeasons: group.rateSeasons,
          };
    const depositAmount = ownDeposit ? car.depositAmount : group.depositAmount;
    return {...prices, ...(isSet(depositAmount) ? {depositAmount} : {}), ownPrices, ownDeposit};
}

/** The name a car rented on its own goes by: its listing title, else make and model. */
export function vehicleListingTitle(car: {listingTitle?: string; make: string; model: string}): string {
    return car.listingTitle?.trim() || `${car.make} ${car.model}`;
}
