"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.Register = void 0;
const db_1 = require("../config/db");
const argon2 = __importStar(require("argon2"));
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        const hashPassword = yield argon2.hash(newUser.password);
        newUser.password = hashPassword;
        yield db_1.prisma.user.create({
            data: newUser,
        });
        res.status(201).json({
            message: " added user successfully",
        });
    }
    catch (error) {
        const prismaError = error;
        return res.status(400).json({
            message: prismaError.message,
        });
    }
});
exports.Register = Register;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        console.log(username, 'gfgfg');
        const login = yield db_1.prisma.user.findFirst({
            where: {
                username,
            },
        });
        const isValidPassword = yield argon2.verify(login.password, password);
        if (!isValidPassword) {
            return res.status(400).json({
                message: 'Wrong username or password',
            });
        }
        res.status(200).json({
            message: `Welcome back!${username}`
        });
    }
    catch (error) {
        const prismaError = error;
        return res.status(400).json({
            message: prismaError.message,
        });
    }
});
exports.Login = Login;
