const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();
require("./auth");

const app = express();
app.use(cors({ origin: "https://vendor-hyhx.onrender.com", credentials: true }));
app.use(express.json());
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/vendors", require("./routes/vendor"));

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "https://vendor-hyhx.onrender.com",
    failureRedirect: "/login",
  })
);
app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) return res.status(500).json({ message: "Logout failed" });

    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logged out successfully" }); // No redirect here!
    });
  });
});

app.listen(5000, () => console.log("Backend on port 5000"));
