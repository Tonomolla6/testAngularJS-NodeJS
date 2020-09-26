var router = require('express').Router();

router.get('/facturascripts', function (req, res) {
    const file = `${__dirname}/facturascripts.zip`;
    res.download(file); // Set disposition and send it.
});