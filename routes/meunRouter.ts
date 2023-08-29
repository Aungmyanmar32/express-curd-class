import express from "express";
import { appData } from "../demoData";

export const menuRouter = express.Router();

// http://localhost:5000/menu

const { menus } = appData;

menuRouter.get("/", (req, res) => {
  res.send(menus); //json --> response
});

menuRouter.put("/", (req, res) => {
  res.send("hello put ");
});

menuRouter.post("/", (req, res) => {
  res.send("hello post method");
});

menuRouter.delete("/", (req, res) => {
  res.send("hello delete");
});
