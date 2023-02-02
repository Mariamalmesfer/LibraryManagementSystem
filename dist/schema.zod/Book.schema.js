"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const zod_1 = require("zod");
exports.BookSchema = zod_1.z.object({
    body: zod_1.z.object({
        ISBN: zod_1.z.string({ required_error: "ISBN required" }),
        Title: zod_1.z.string({ required_error: "Titel required" }),
        Author: zod_1.z.string({}),
        Availablilty: zod_1.z.boolean({ required_error: "The Book satues requierd" }),
        category: zod_1.z.string({ required_error: "category required" }),
    }),
});
