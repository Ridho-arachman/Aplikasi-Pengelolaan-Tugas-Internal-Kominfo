const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { JWT_SECRET } = require("../services/auth.service"); // Get secret from auth.service
const { getUser } = require("../services/user.service");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

passport.use(
  new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      const user = await getUser(jwt_payload.nip);
      if (user) {
        // Attach user object to request (excluding password)
        const { password, ...userWithoutPassword } = user;
        return done(null, userWithoutPassword);
      }
      return done(null, false);
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;
