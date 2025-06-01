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
  'https://3-d-portfolio-git-main-marajpatel123s-projects.vercel.app',
  'https://3-d-portfolio-nine-blond.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed from this origin: ' + origin));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

app.options('*', cors());


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
