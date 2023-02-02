import express from "express";
import { connectDB } from "./config/db";
import authrouter from "././router/auth.router";
import bookrouter from "././router/book.router";

const app = express();
const PORT = 5001;
app.use(express.json());
connectDB();

app.use("/api/v1/user", authrouter);
app.use("/book", bookrouter);

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
