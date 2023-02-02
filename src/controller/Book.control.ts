import { Book } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";


// add new book
export const addBook = async (req: Request, res: Response) => {
    try {
      const newBook = req.body as Book;
      await prisma.book.create({
        data: newBook,
      });
      res.status(201).json({
        message: " Book is added",
      });
      
    } catch (error) {
      console.log(error);
    }
  };

// update new book
  export const updateBook = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updateBook = req.body as Book;
      await prisma.book.update({
        where: { id },
        data: updateBook,
      });
      res.status(200).json({
        message: "Book is updated",
      });
    } catch (error) {
      console.log(error);
    }
  };

 // delete new book
 
 export const DeletBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.book.delete({
      where: { id },
    });

    res.status(200).json({
      message: "Book isdeleted",
    });
  } catch (error) {
    console.log(error);
  }
};

// get the book by id 
export const GetBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.findMany({
      where: { user_id: id },
      select: {
        id: false,
        ispn : true,
        title : true,
        author : true,
        availablilty : true,
        category : true,
      },
    });
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
  }
};

/// GET Availablilty


export const GetBookAvailablilty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.findMany({
      where: { user_id: id },
      select: {
        availablilty : true,
      },
    });
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
  }
};







