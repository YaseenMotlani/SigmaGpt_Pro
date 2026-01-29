import express from "express";
import "dotenv/config";
import cors from "cors"
import mongoose from "mongoose";
import testRoutes from "./routes/test.js";
import authRoutes from "./routes/auth.js";
import { protect } from "./middleware/auth.js";

const app = express();
const PORT = 8080;

// This both line helps to Fronted connect to Backend
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api", testRoutes);
app.use("/api/chat", protect);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
    connectDb();
});

// Connecting database
const connectDb = async() => {
  try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected with database!");
  } catch(err) {
      console.log("Failed to connect with Db", err);
  }
}





// We are using post because evencuatly hum jo architechure build karege we have a frontend ,
// frontend send query and query ko openaiapi ke pass send karege and jo responce aayega we have again send fronted ,
//  fronted se jo query aanewali hai that will come form of post request 

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});


// app.post("/test", async (req, res) => {

//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json" ,
//             "x-goog-api-key": process.env.GEMINI_API_KEY
//         },
//         body: JSON.stringify({
//             model: "models/gemini-2.0-flash",
//             // messages: [{
//             //     role: "user",
//             //     content: "Hello"
//             // }]
//             contents: [
//                 {
//                     role: "user",
//                     parts: [
//                     { text: req.body.message }
//                     ]
//                 }
//             ]

//         })
//     };

//     try {
//        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", options);
//        const data = await response.json();
//        console.log(data.candidates[0].content.parts[0].text);
//        res.send(data.candidates[0].content.parts[0].text); //responce api end point send
//     } catch(err) {
//         console.log(err);
//     }
// });

