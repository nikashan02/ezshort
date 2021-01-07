const express = require('express');
const router = express.Router();
const ShortUrl = require('../../models/short');

router.get('/getUrls', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.send(shortUrls);
});

router.get('/redirect', async (req, res) => {
  const shortreq = req.headers.short;

  ShortUrl.findOne({ short: shortreq })
    .then((doc) => {
      return res.json({ full: doc.full })
    })
    .catch((err) => {
      return res.status(400).json({error: "Error"});
    })
});

router.post('/shortUrls', async (req,res) => {
  await ShortUrl.create({ full: req.body.first });
  ShortUrl.findOne({ full: req.body.first })
    .then((doc) => {
      res.send({ short: doc.short });
    })
    .catch((err) => {
      return res.status(400).json({error: "Error"});
    })
})

module.exports = router;