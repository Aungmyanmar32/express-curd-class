import express from "express";

import { helloRouter } from "./routes/helloRouter";
import { menuRouter } from "./routes/meunRouter";

const app = express();
const PORT = 5000;

app.use(express.static("public")); // ( / )
//application level middleware
// use()
// get(.....) --> GET method
// app.get(url/route,(req,res)=>{})

//htpp://localhost:5000/ --> route ( / )--> req.url
//htpp://localhost:5000/koaung --> route ( /koaung )--> req.url

//router level middleware

app.use("/hello", helloRouter);
app.use("/menu", menuRouter);

// (/menuCategory)
app.get("/menuCategory", (req, res) => {
  res.send("menuCategory");
});

app.listen(PORT, () => console.log("Server is running on port", PORT));
