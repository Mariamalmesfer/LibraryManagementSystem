import express from "express";
import { Login, Register } from "../controller/auth.control";
import Vialdate from "../middleware/vialdate";
import { LoginSchema, RegisterSchema } from "../schema.zod/auth.schema";

const router = express.Router();

router.post("/register", Vialdate(RegisterSchema), Register);
router.post("/login", Vialdate(LoginSchema), Login);

export default router;
