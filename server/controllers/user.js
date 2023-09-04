const User = require("../models/user");

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await User.matchPasswordAndGenerateToken(
      email,
      password
    );
    const { _id, fullName, profileImageURL, role } = user;

    return res
      .status(200)
      .send({ user: { _id, fullName, profileImageURL, role }, token });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const handleUserSignup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    await User.create({
      fullName,
      email,
      password,
    });

    return res.status(200).send({ message: "User Created Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const handleUserLogout = async (req, res) => {
  try {
    res.clearCookie("token").redirect("/");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  handleUserLogin,
  handleUserSignup,
  handleUserLogout,
};
