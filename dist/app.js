"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const auth_router_1 = __importDefault(require("././router/auth.router"));
const book_router_1 = __importDefault(require("././router/book.router"));
const app = (0, express_1.default)();
const PORT = 5001;
app.use(express_1.default.json());
(0, db_1.connectDB)();
app.use("/api/v1/user", auth_router_1.default);
app.use("/api/v1/book", book_router_1.default);
app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
});
