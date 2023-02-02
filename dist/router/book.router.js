"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vialdate_1 = __importDefault(require("../middleware/vialdate"));
const Book_control_1 = require("../controller/Book.control");
const Book_schema_1 = require("../schema.zod/Book.schema");
const router = express_1.default.Router();
router.post("/addbook", (0, vialdate_1.default)(Book_schema_1.BookSchema), Book_control_1.addBook);
router.delete('/deletbook/:id', (0, vialdate_1.default)(Book_schema_1.BookSchema), Book_control_1.DeletBook);
router.get('/getbook/:id', (0, vialdate_1.default)(Book_schema_1.BookSchema), Book_control_1.GetBook);
router.get('/getbookavailablilty/:id', (0, vialdate_1.default)(Book_schema_1.BookSchema), Book_control_1.GetBookAvailablilty);
router.put('/updatebook/:id', (0, vialdate_1.default)(Book_schema_1.BookSchema), Book_control_1.updateBook);
exports.default = router;
