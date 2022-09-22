const { verifyAccessJWT } = require("../helper/jwt.helper");
const { getJWT } = require("../helper/redis.helper");

const userAuthorization = async (req, res, next) => {
  const { authorization } = req.headers;

  const decoded = verifyAccessJWT(authorization);
  if (decoded.username) {
    const userId = await getJWT(authorization);

    console.log(userId);
    if (!userId) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.userID = userId;
    return next();
  }
};

module.exports = {
  userAuthorization,
};
