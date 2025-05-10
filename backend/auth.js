const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
   callbackURL: "https://vendor-backend-2x0h.onrender.com/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));
