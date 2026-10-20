# carRental Module

Shared types, schema definitions, and Zod validators for the Arpeggio car rental domain. This module is the contract between **maestro** (persistence and API routes) and **sinfonia** (admin panel and the public rental site).

Enable at runtime via `ENABLED_MODULES` (maestro) or `VITE_ENABLED_MODULES` (sinfonia). Depends on `core` and `finance`.

## Scope

Rental settings, locations with time zone and opening hours, vehicle categories (what customers book), vehicles, vehicle blocks, extras, and reservations with their lifecycle (hold, confirm, hand over, return, extend, cancel, no-show). The public storefront contracts cover search, quote, booking and the guest manage link.

## Directory layout

```
carRental/
├── api/carRental/private/<resource>/   # schema-defs, DTOs, create/edit validators
├── api/carRental/public/rentalStorefront/  # public search, quote, book, manage
├── dto/                                # *Simple snippet types
└── helpers/static/exceptions/          # error messages in 5 locales
```
