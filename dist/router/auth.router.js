"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_control_1 = require("../controller/auth.control");
const vialdate_1 = __importDefault(require("../middleware/vialdate"));
const auth_schema_1 = require("../schema.zod/auth.schema");
const router = express_1.default.Router();
router.post("/register", (0, vialdate_1.default)(auth_schema_1.RegisterSchema), auth_control_1.Register);
router.post("/login", (0, vialdate_1.default)(auth_schema_1.LoginSchema), auth_control_1.Login);
exports.default = router;
