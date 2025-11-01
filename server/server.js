import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// ✅ Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ CORS
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
  res.send("✅ Backend Live & Running with Resend!");
});

// ✅ Contact Route
app.post("/send-message", async (req, res) => {
  req.setTimeout(20000);

  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL, // onboarding@resend.dev
      to: process.env.MY_EMAIL, // replace with your receiving email
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Message Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
      reply_to: email
    });

    return res.json({
      success: true,
      message: "✅ Message Sent Successfully!"
    });
  } catch (error) {
    console.error("❌ Email Error:", error);
    return res.status(500).json({
      success: false,
      error: "❌ Email Failed"
    });
  }
});

// ✅ 404 route
app.use((req, res) => {
  res.status(404).send("⚠️ Route Not Found");
});

// ✅ Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
