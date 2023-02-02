"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = exports.RegisterSchema = void 0;
const zod_1 = require("zod");
exports.RegisterSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({ required_error: "Username is required", invalid_type_error: "Username must be a string" }),
        password: zod_1.z.string({ required_error: "Password is required" }),
        email: zod_1.z.string({ required_error: "email is required", invalid_type_error: "plasee enter a email", }).email(),
    }),
});
exports.LoginSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string(),
        password: zod_1.z.string(),
    }),
});
