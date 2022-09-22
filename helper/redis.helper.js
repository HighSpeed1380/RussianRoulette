const redis = require("redis");

const client = redis.createClient();

// (async () => {
//   await client.connect();
// })();

client.on("connect", () => console.log("Redis Client Connected"));
client.on("error", (err) => console.log("Redis Client Connection Error", err));

const setJWT = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      client.set(key, value, (err, res) => {
        if (err) reject(err);
        resolve(res);
        console.log(key);
        console.log(value);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getJWT = (key) => {
  return new Promise((resolve, reject) => {
    try {
      client.get(key, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getJWT,
  setJWT,
};
