const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express=require("express");
const cors=require("cors");
const connectDB=require("./config/db");
const todoRoutes=require("./routes/todoRoutes");

const app=express();

app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://todo-app-rho-one-15.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

connectDB();

app.use("/api/todos",todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
