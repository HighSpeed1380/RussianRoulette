const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const userInfoController = require("../../controllers/userInfoController");
const { hashPassword, comparePassword } = require("../../helper/bcrypt.helper");
const {
  createAccessJWT,
  createRefreshJWT,
} = require("../../helper/jwt.helper");

//for example practise
router.all("/", (req, res, next) => {
  next();
});

router.post("/", async (req, res) => {
  const { username, email, password, role, level, balance, generatedAddress } =
    req.body;
  try {
    //hash password
    const hashedPass = await hashPassword(password);

    const newUserObj = {
      username,
      email,
      password: hashedPass,
      role,
      level,
      balance,
      generatedAddress,
    };

    //insert userinformation
    const result = await userInfoController.insertUser(newUserObj);
    console.log(result);
    res.json({ message: "New user created", result });
  } catch (error) {
    console.log(error);
    res.json({ statux: "error", message: error.message });
  }
});

router.post(
  "/signup",
  check("username", "Username is required.").notEmpty(),
  check("email", "Please include a vaild email").isEmail(),
  check("password", "Please enter a password with 3 more characters.").isLength(
    { min: 3 }
  ),
  (req, res) => {
    userInfoController.signup(req, res);
  }
);

// signin
router.post(
  "/signin",
  // check("username", "Username is required").exists(),
  // check("password", "Password is required").exists(),
  // (req, res) => {
  //   userInfoController.signin(req, res);
  // }

  async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);

    if (!username || !password) {
      return res.json({ status: "error", message: "Invalid form submition" });
    }

    const user = await userInfoController.getUserByUsername(username);

    const passwordFromDb = user && user._id ? user.password : null;

    if (!passwordFromDb) {
      return res.json({
        status: "error",
        message: "Invalid form username or password",
      });
    }

    const result = await comparePassword(password, passwordFromDb);

    if (!result) {
      return res.json({
        status: "error",
        message: "Invalid form username or password",
      });
    }

    const accessJWT = await createAccessJWT(user.username);
    const refreshJWT = await createRefreshJWT(user.username);

    res.json({
      status: "success",
      message: "Login Successfully!",
      accessJWT,
      refreshJWT,
    });
  }
);

router.put("/updateUserInfoById/:_id", (req, res) => {
  userInfoController.updateUserInfoById(req, res);
});

router.get("/getUserInfoById/:_id", (req, res) => {
  userInfoController.getUserInfoById(req, res);
});
router.get("/getAllUserInfo", (req, res) => {
  userInfoController.getAllUserInfo(req, res);
});
router.put("/updateUserInfoOne", (req, res) => {
  userInfoController.updateUserInfoOne(req, res);
});
router.get("/getGeneratedAddress", (req, res) => {
  userInfoController.getGeneratedAddress(req, res);
});

module.exports = router;
