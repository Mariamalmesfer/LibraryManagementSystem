import { TypeOf, z } from "zod";

export const BookSchema = z.object({
    body: z.object({
         ispn: z.string({required_error:"ISBN required"}),
         title: z.string({required_error:"Titel required"}),
         author: z.string({required_error:"The Book author is requierd"}),
         availablilty: z.boolean({required_error:"The Book satues requierd"}),
         category: z.string({required_error:"category required"}),
    }),
  });


  export type BooktypeSchema = TypeOf<typeof BookSchema >["body"];