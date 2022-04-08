module.exports = {
  KEY: process.env.JWT_KEY,
  jwtExpirationDelay: 3600, // 1 hour
  jwtRefreshExpiration: 86400, // 24 hours
};
