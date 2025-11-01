import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// ✅ Use Render port or local fallback
const PORT = process.env.PORT || 5000;

// ✅ CORS - allow only your frontend
const allowedOrigins = [
  "https://avins-portfolio.netlify.app",
  "http://localhost:5173"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);



app.use(express.json());

// ✅ Home route
app.get("/", (req, res) => {
  res.send("✅ Portfolio Backend Live on Render!");
});

// ✅ Contact route
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
   await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: `Message from ${name}`,
  html: `
    <h3>New Contact Message</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
  `,
  replyTo: email
});
    return res.json({ success: true, message: "✅ Message sent successfully" });
  } catch (err) {
    console.log("❌ Email Error:", err);
    return res.status(500).json({ success: false, error: "❌ Email failed" });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
