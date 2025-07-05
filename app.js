// Load environment variables
require("dotenv").config();

// Import required modules
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// ✅ Define `app` first before using it
const app = express(); 

// ✅ Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // ✅ This will serve static files from 'public' folder

// ✅ Nodemailer Configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

// ✅ Default Route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html"); // ✅ Serves an HTML file
});

// ✅ Contact Form Route
app.post("/contact", async (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission: ${subject}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Email Sent Successfully!");
        res.json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ message: "Failed to send message!" });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
