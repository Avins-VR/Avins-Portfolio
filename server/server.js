import express from "express";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// ✅ CORS Settings
app.use(
  cors({
    origin: [
      "https://avins-portfolio.netlify.app",
      "http://localhost:5173"
    ],
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("✅ Backend Live & Running!");
});

// ✅ Contact Route
app.post("/send-message", async (req, res) => {
  req.setTimeout(20000);

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,         // ✅ Works on Render
        secure: false,     // ✅ Must be false for 587
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        },
        connectionTimeout: 20000
      })
    );

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

// ✅ Catch-all
app.use((req, res) => {
  res.status(404).send("⚠️ Route Not Found");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
