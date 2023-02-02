import express from "express";
import Vialdate from "../middleware/vialdate";
import { addBook, GetBook, DeletBook, updateBook ,GetBookAvailablilty } from "../controller/Book.control";
import { BookSchema } from "../schema.zod/Book.schema";



const router = express.Router();

router.post("/addbook",addBook)
router.delete('/deletbook/:id',DeletBook)
router.get('/getbook/:id',GetBook)
router.get('/getbookavailablilty/:id',GetBookAvailablilty)
router.put('/updatebook/:id',updateBook)


export default router;
