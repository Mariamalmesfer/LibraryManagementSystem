"use strict";
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
exports.GetBookAvailablilty = exports.GetBook = exports.DeletBook = exports.updateBook = exports.addBook = void 0;
const db_1 = require("../config/db");
// add new book
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = req.body;
        yield db_1.prisma.book.create({
            data: newBook,
        });
        res.status(201).json({
            message: " Book is added",
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.addBook = addBook;
// update new book
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateBook = req.body;
        yield db_1.prisma.book.update({
            where: { id },
            data: updateBook,
        });
        res.status(200).json({
            message: "Book is updated",
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateBook = updateBook;
// delete new book
const DeletBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield db_1.prisma.book.delete({
            where: { id },
        });
        res.status(200).json({
            message: "Book isdeleted",
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.DeletBook = DeletBook;
// get the book by id 
const GetBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield db_1.prisma.book.findMany({
            where: { user_id: id },
            select: {
                id: false,
                ispn: true,
                title: true,
                author: true,
                availablilty: true,
                category: true,
            },
        });
        res.status(200).json(book);
    }
    catch (error) {
        console.log(error);
    }
});
exports.GetBook = GetBook;
/// GET Availablilty
const GetBookAvailablilty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield db_1.prisma.book.findMany({
            where: { user_id: id },
            select: {
                availablilty: true,
            },
        });
        res.status(200).json(book);
    }
    catch (error) {
        console.log(error);
    }
});
exports.GetBookAvailablilty = GetBookAvailablilty;
