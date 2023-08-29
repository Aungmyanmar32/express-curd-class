import express from "express";

export const helloRouter = express.Router();

// http://localhost:5000/hello

helloRouter.get("/", (req, res) => {
  res.send("hello get");
});

helloRouter.put("/", (req, res) => {
  res.send("hello put ");
});

// http://localhost:5000/hello/hello
helloRouter.post("/hello", (req, res) => {
  res.send("hello post method");
});

helloRouter.delete("/", (req, res) => {
  res.send("hello delete");
});
