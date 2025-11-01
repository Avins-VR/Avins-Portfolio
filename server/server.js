import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://avins-portfolio.netlify.app",
  "http://localhost:5173"
];

// ✅ CORS Fix (must include credentials)
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // ✅ allow cookies/auth/session
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);

// ✅ Extra header for credentials
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());

// ✅ Health Route
app.get("/", (req, res) => {
  res.send("✅ Backend Live & Running!");
});

// ✅ Contact Route
app.post("/send-message", async (req, res) => {
  req.setTimeout(20000);

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h3>New Message Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
      replyTo: email
    });

    return res.json({ success: true, message: "✅ Message Sent Successfully!" });
  } catch (error) {
    console.error("❌ Email Error:", error);
    return res.status(500).json({ success: false, error: "❌ Email Failed" });
  }
});

// ✅ Handle Invalid Routes
app.use((req, res) => {
  res.status(404).send("⚠️ Route Not Found");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
