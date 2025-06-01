const express= require("express");
const dotenv= require("dotenv");
const cors= require('cors');
const connectDB = require("./config/db");
const contactApi=require("./routes/contactRoutes");
dotenv.config();

const app= express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://3-d-portfolio-nine-blond.vercel.app',
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Allow cookies/sessions
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use(contactApi);
// Home route
app.post('/contact', (req, res) => {
  res.send('Successfully received contact form data');
});
app.get('/', (req, res) => {
  res.send('Hello I am Home Page..');
});
app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
