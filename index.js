import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv"
import { SessionsClient } from '@google-cloud/dialogflow';
import { v4 as uuid } from 'uuid';

const app = express();

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyPath = path.join(__dirname, 'config', 'config.json');

process.env.GOOGLE_APPLICATION_CREDENTIALS = keyPath;

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

app.get('./api/message', (req, res)=>{
    res.join({
        message : "Hello from the backend"
    });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(3000 , ()=>{
    console.log("Server is running on the PORT 3000");
});