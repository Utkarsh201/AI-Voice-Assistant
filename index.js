import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { SessionsClient } from "@google-cloud/dialogflow";
import { v4 as uuid } from "uuid";

const app = express();
const server = createServer(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const io = new Server(server, {
  cors: {
    origin: "/",
    method: ["GET", "POST"],
  },
});

app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

io.on("connection", (socket) => {
  console.log("A user connected with the socket ID");

  socket.on("sendMessage", async (text) => {
    try {
      console.log(`Message from ${socket.id}:`, text);

      // --- AI LOGIC GOES HERE ---
      // (Call Dialogflow or Gemini API with the 'text')
      // const botReply = await callGeminiAPI(text);

      
      // For testing, just echo back:
      const botReply = `This is the bot's answer to: ${text}`;
      // -------------------------

      // Send the reply *back* to just this one user
      socket.emit("botReply", botReply);
    } catch (error) {
      console.error("AI Error:", error);
      socket.emit("botError", "Sorry, I had an error processing that.");
    }
  });

  // Handle when the user disconnects
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000);

// const keyPath = path.join(__dirname, 'config', 'config.json');

// process.env.GOOGLE_APPLICATION_CREDENTIALS = keyPath;

// app.get('./api/message', (req, res)=>{
//     res.join({
//         message : "Hello from the backend"
//     });
// });
