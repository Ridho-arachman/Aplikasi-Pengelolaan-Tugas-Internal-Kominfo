const userServices = require("../services/user.services");

const CreateUser = (req, res) => {
  try {
    const data = userServices.creteUser(req.body);
    res.json({ status: "success", message: "User created", data }).status(201);
  } catch (error) {}
};
