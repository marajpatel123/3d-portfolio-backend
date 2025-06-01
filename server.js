const express= require("express");
const dotenv= require("dotenv");
const cors= require('cors');
const connectDB = require("./config/db");
const contactApi=require("./routes/contactRoutes");
dotenv.config();

const app= express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'https://3-d-portfolio-git-main-marajpatel123s-projects.vercel.app',
];

app.use(cors({
  origin: 'https://3-d-portfolio-nine-blond.vercel.app',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Allow cookies/sessions
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use(contactApi);
app.get('/', (req, res) => {
  res.send('Hello I am Home Page..');
});
app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
