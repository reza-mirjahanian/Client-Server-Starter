const { Validator } = require('node-input-validator');
module.exports = async (req, res, next) => {
  const { botId, message } = req.body;

  const v = new Validator(
    {
      botId,
      message,
    },
    {
      botId: 'required|string|minLength:5',
      message: 'required|string|minLength:2',
    }
  );

  if (await v.fails()) {
    res.status(400).send({
      error: 'Your data Id is invalid',
    });
  } else {
    next();
  }
};
