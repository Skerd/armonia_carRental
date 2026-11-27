import {describe, expect, it} from "vitest";
import {effectiveVehicleRates, vehicleListingTitle} from "../vehicleRates";

const group = {
    dailyRate: 110,
    weekendDailyRate: 120,
    weeklyRate: 690,
    rateSeasons: [{startDate: "2026-06-15", endDate: "2026-09-15", dailyRate: 140}],
    depositAmount: 1500,
};

describe("effectiveVehicleRates (D198)", () => {
    it("takes the group's whole list when the car has no prices of its own", () => {
        expect(effectiveVehicleRates(group, {})).toEqual({...group, ownPrices: false, ownDeposit: false});
    });

    it("replaces the whole list with the car's own, never mixing in the group's season or weekend prices", () => {
        const rates = effectiveVehicleRates(group, {dailyRate: 150});
        expect(rates).toEqual({dailyRate: 150, rateSeasons: [], depositAmount: 1500, ownPrices: true, ownDeposit: false});
    });

    it("keeps the car's own weekend, week and season prices with its day price", () => {
        const seasons = [{startDate: "2026-07-01", endDate: "2026-08-31", dailyRate: 190}];
        const rates = effectiveVehicleRates(group, {dailyRate: 150, weekendDailyRate: 160, weeklyRate: 900, rateSeasons: seasons});
        expect(rates).toMatchObject({dailyRate: 150, weekendDailyRate: 160, weeklyRate: 900, rateSeasons: seasons, ownPrices: true});
    });

    it("inherits the deposit on its own", () => {
        expect(effectiveVehicleRates(group, {depositAmount: 2500})).toMatchObject({dailyRate: 110, depositAmount: 2500, ownPrices: false, ownDeposit: true});
        expect(effectiveVehicleRates(group, {dailyRate: 150})).toMatchObject({depositAmount: 1500, ownDeposit: false});
    });

    it("treats a zero price as set, not as empty", () => {
        expect(effectiveVehicleRates(group, {dailyRate: 0, depositAmount: 0})).toMatchObject({dailyRate: 0, depositAmount: 0, ownPrices: true, ownDeposit: true});
    });

    it("leaves the deposit out when neither has one", () => {
        expect(effectiveVehicleRates({dailyRate: 30, rateSeasons: []}, {})).toEqual({dailyRate: 30, rateSeasons: [], ownPrices: false, ownDeposit: false});
    });
});

describe("vehicleListingTitle", () => {
    it("uses the listing title, else make and model", () => {
        expect(vehicleListingTitle({listingTitle: "  G 63 AMG – Black ", make: "Mercedes-Benz", model: "G-Class"})).toBe("G 63 AMG – Black");
        expect(vehicleListingTitle({listingTitle: " ", make: "Mercedes-Benz", model: "G-Class"})).toBe("Mercedes-Benz G-Class");
        expect(vehicleListingTitle({make: "BMW", model: "5 Series"})).toBe("BMW 5 Series");
    });
});
