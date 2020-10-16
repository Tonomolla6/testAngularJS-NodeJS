var router = require('express').Router();

router.get('/bingo', function (req, res) {
    const file = `${__dirname}/bingo.zip`;
    res.download(file); // Set disposition and send it.
});