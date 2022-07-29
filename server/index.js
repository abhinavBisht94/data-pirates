//---------------------------------------
// Imports
const express = require("express");
const cors = require("cors");
const http = require("http");
const {Server} = require("socket.io");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connection = require("./db");
const UserSchema = require("./models/UserModel");
const authRouter = require("./routes/auth.routes");
const TaskModel = require("./models/TaskModel");
const taskrouter = require("./routes/task.routes");
const server = http.createServer(app);

//---------------------------------------
// Middleware
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
dotenv.config();

app.use("/auth", authRouter);
app.use("/task", taskrouter);

//---------------------------------------
app.get("/", async (req, res) => {
  console.log("Hello data-pirates!");

  res.send("Hello data-pirates!");
});



//.........Chat_app_server...............//

const io = new Server(server, {
    cors: {
        origin: "http://localhost:8080",
        methods : ["GET","POST"],
    }
})

io.on("connection", (socket)=>{
    console.log(`User connected: ${socket.id}`);

    socket.on("join_room", (data)=>{
        socket.join(data);
        console.log(`user with ID: ${socket.id} joined room: ${data}`)
    });

    socket.on("send_message", (data)=>{
        // console.log(data)
        socket.to(data.room).emit("receive_message", data);
    })

    socket.on("disconnect",()=>{

        console.log("user disconnect", socket.id);
    })
})



//---------------------------------------
// Server
app.listen(PORT, async () => {
  try {
    await connection;
  } catch {
    console.log("Error ocurred while connecting");
  }
  console.log(`Connected to PORT=> ${PORT}`);
});


server.listen(3001, ()=>{
  console.log("server is runing")
})