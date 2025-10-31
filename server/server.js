import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// ✅ Use Render port or local fallback
const PORT = process.env.PORT || 5000;

// ✅ CORS - include your deployed frontend URL
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://avins-portfolio.onrender.com", // backend URL (optional)
      "https://avins-portfolio.netlify.app" // 🚨 add your frontend here
    ],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Default route to avoid "Cannot GET /"
app.get("/", (req, res) => {
  res.send("✅ Portfolio Backend Live!");
});

// ✅ Contact API
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return res.json({ success: true, message: "Message sent ✅" });
  } catch (err) {
    console.log("❌ Email Error:", err);
    return res.status(500).json({ success: false, error: "Email failed ❌" });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
