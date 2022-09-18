const messageValidator = require('../middlewares/message.validator');
const express = require('express');
const Repo = require('../../repository/data');
const logger = require('../../utils/logger');

const router = express.Router();

router.post('/api/:products', async (req, res) => {
  try {
    const { channelId } = req.params;

    const { message } = req.body;

    // const newMessage =  channelRepo.createMessage({
    //   message,
    //   channelId: parseInt(channelId)
    // });

    return res.status(200).send(newMessage);
  } catch (err) {
    logger.error(req.path, {
      err,
    });
    res.status(500).send('Error');
  }
});

router.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Repo.findProduct(Number(id));
    return res.status(200).send(result);
  } catch (err) {
    logger.error(req.path, {
      err,
    });
    res.status(500).send('Error');
  }
});

//http://localhost:3200/api/search?q=Laptop
router.get('/api/search', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.query);
    return res.status(200).send(req.query);
  } catch (err) {
    logger.error(req.path, {
      err,
    });
    res.status(500).send('Error');
  }
});

router.get('/api/products', async (req, res) => {
  try {
    const result = await Repo.findProduct();
    return res.status(200).send(result);
  } catch (err) {
    logger.error(req.path, {
      err,
    });
    res.status(500).send('Error');
  }
});

module.exports = router;
