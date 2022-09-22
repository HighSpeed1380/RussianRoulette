require("dotenv").config();
const jwt = require("jsonwebtoken");
const { accessToken } = require("mapbox-gl");
const { storeUserRefreshJWT } = require("../controllers/userInfoController");
const { setJWT, getJWT } = require("./redis.helper");

const createAccessJWT = async (username, _id) => {
  try {
    const accesJWT = await jwt.sign(
      { username, _id },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: "15m",
      }
    );
    await setJWT(accesJWT, _id);
    return Promise.resolve(accesJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const createRefreshJWT = async (payload, _id) => {
  try {
    const refreshJWT = await jwt.sign(
      { payload },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: "30d",
      }
    );

    const result = await storeUserRefreshJWT(_id, refreshJWT);

    return Promise.resolve(refreshJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const verifyAccessJWT = (userJWT) => {
  try {
    jwt.verify(userJWT, process.env.JWT_ACCESS_SECRET);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  createAccessJWT,
  createRefreshJWT,
  verifyAccessJWT,
};
