var router = require('express').Router();
var mongoose = require('mongoose');
var Service = mongoose.model('Service');
var User = mongoose.model('User');
var auth = require('../auth');

// Select all limit 20
router.get('/', auth.optional, function (req, res, next) {
    var limit = 20;
    var query = {};

    if (typeof req.query.limit !== 'undefined') {
        limit = req.query.limit;
    }

    Promise.all([
        req.query.author ? User.findOne({ username: req.query.author }) : null
    ]).then(function (results) {
        var author = results[0];

        if (author) {
            query.author = author._id;
        }

        return Promise.all([
            Service.find(query)
                .limit(Number(limit))
                .sort({ createdAt: 'desc' })
                .populate('author')
                .exec(),
            Service.count(query).exec(),
            req.payload ? User.findById(req.payload.id) : null,
        ]).then(function (results) {
            var services = results[0];
            var servicesCount = results[1];

            return res.json({
                services: services,
                servicesCount: servicesCount
            });
        });
    }).catch(next);
});

// Parametros
router.param('comment', function (req, res, next, id) {
    Comment.findById(id).then(function (comment) {
        if (!comment) { return res.sendStatus(404); }

        req.comment = comment;

        return next();
    }).catch(next);
});

// Return a Service
router.get('/:service', auth.optional, function (req, res, next) {
    Promise.all([
        req.payload ? User.findById(req.payload.id) : null,
        req.service.populate('author').execPopulate()
    ]).then(function (results) {
        var user = results[0];

        return res.json({ service: req.service.toJSONFor(user) });
    }).catch(next);
});

// Create new service
router.post('/', auth.required, function (req, res, next) {
    User.findById(req.payload.id).then(function (user) {
        if (!user) { return res.sendStatus(401); }

        var service = new Service(req.body.service);

        service.author = user;
        return service.save().then(function () {
            console.log(service.author);
            return res.json({
                service: service.toJSONFor(user)
            });
        });
    }).catch(next);
});

// update category
router.put('/:category', auth.required, function (req, res, next) {
    User.findById(req.payload.id).then(function (user) {
        if (req.category.author._id.toString() === req.payload.id.toString()) {
            if (typeof req.body.category.title !== 'undefined') {
                req.category.title = req.body.category.title;
            }

            if (typeof req.body.category.description !== 'undefined') {
                req.category.description = req.body.category.description;
            }

            req.category.save().then(function (category) {
                return res.json({ category: category.toJSONFor(user) });
            }).catch(next);
        } else {
            return res.sendStatus(403);
        }
    });
});

// delete category
router.delete('/:category', auth.required, function (req, res, next) {
    User.findById(req.payload.id).then(function (user) {
        if (!user) { return res.sendStatus(401); }

        if (req.category.author._id.toString() === req.payload.id.toString()) {
            return req.category.remove().then(function () {
                return res.sendStatus(204);
            });
        } else {
            return res.sendStatus(403);
        }
    }).catch(next);
});

module.exports = router;