const { chronometer } = require("../models/Chronometer");
const { messageOut, messageErrorCatch } = require("../libs/helper");

const getTimes = async (req, res) => {
  try {
    let times = await chronometer.findAll();

    if (times) {
      return res.
            status(201).
            json(messageOut(0, "times details", times));
    }
  } catch (error) {
    console.log(error);
    messageErrorCatch(error, res);
  }
};

const registerTimes = async (req, res) => {
  try {
    const { finish_time, username } = req.body;
    let newRegisterTime = await chronometer.create(
      {
        finish_time,
        username,
      },
      {
        fields: ["finish_time", "username"],
      }
    );

    if (newRegisterTime) {
      return res
        .status(201)
        .json(messageOut(0, "time correctly registered", newRegisterTime));
    }
  } catch (error) {
    console.log(error);
    messageErrorCatch(error, res);
  }
};

module.exports = {
  getTimes,
  registerTimes,
};
