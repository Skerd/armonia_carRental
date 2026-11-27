import {isEnumZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withSelectFormValidator} from "../../../../../core/utilities/zod/shared.validator";
import {VEHICLE_CATALOG_LEVELS} from "./vehicleCatalog.schema-def";

/** A select of one level (the car form picks a model; a model's form picks a make), optionally under one parent. */
export function vehicleCatalogSelectFormSchema(languageCode: string, form: any = null) {
    return withSelectFormValidator(languageCode, form, {
        level: isEnumZod(form?.["levelLabel"] ?? "level", VEHICLE_CATALOG_LEVELS, VEHICLE_CATALOG_LEVELS.join(", "), languageCode).optional(),
        parentEntry: isObjectIdZod(form?.["parentEntryLabel"] ?? "parentEntry", languageCode).optional(),
        excludeEntryId: isObjectIdZod(form?.["excludeEntryIdLabel"] ?? "excludeEntryId", languageCode).optional(),
    });
}
