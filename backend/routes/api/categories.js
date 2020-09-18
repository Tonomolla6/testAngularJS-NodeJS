var router = require('express').Router();
var mongoose = require('mongoose');
var Category = mongoose.model('Category');
var User = mongoose.model('User');
var auth = require('../auth');

// // Preload category objects on routes with ':category'
// router.param('category', function(req, res, next, slug) {
//     Category.findOne({ slug: slug})
//         .then(function (category) {
//         if (!category) { return res.sendStatus(404); }

//         req.category = category;

//         return next();
//         }).catch(next);
// });

router.get('/',auth.optional, function(req, res, next) {
    var limit = 20;
    var query = {};

    if(typeof req.query.limit !== 'undefined'){
        limit = req.query.limit;
    }
    
    Promise.all([
        req.query.author ? User.findOne({username: req.query.author}) : null
    ]).then(function(results){
        var author = results[0];

        if (author){
            query.author = author._id;
        }

        return Promise.all([
            Category.find(query)
                .limit(Number(limit))
                .sort({createdAt: 'desc'})
                .populate('author')
                .exec(),
                Category.count(query).exec(),
            req.payload ? User.findById(req.payload.id) : null,
        ]).then(function(results){
            var categories = results[0];
            var categoriesCount = results[1];

            return res.json({
                categories: categories,
                categoriesCount: categoriesCount
            });
        });
    }).catch(next);
});

// Return a category
router.get('/:category', auth.optional, function(req, res, next) {
    Promise.all([
        req.payload ? User.findById(req.payload.id) : null,
        req.category.populate('author').execPopulate()
    ]).then(function(results){
        var user = results[0];

        return res.json({category: req.category.toJSONFor(user)});
    }).catch(next);
});

// Create new category
router.post('/', auth.required, function(req, res, next) {
    User.findById(req.payload.id).then(function(user){
      if (!user) { return res.sendStatus(401); }
  
      var category = new Category(req.body.category);
  
      category.author = user;
      return category.save().then(function(){
        console.log(category.author);
        return res.json({
            category: category.toJSONFor(user)
        });
      });
    }).catch(next);
  });

// update category
router.put('/:category', auth.required, function(req, res, next) {
    User.findById(req.payload.id).then(function(user){
        if(req.category.author._id.toString() === req.payload.id.toString()){
            if(typeof req.body.category.title !== 'undefined'){
                req.category.title = req.body.category.title;
            }

            if(typeof req.body.category.description !== 'undefined'){
                req.category.description = req.body.category.description;
            }

            req.category.save().then(function(category){
                return res.json({category: category.toJSONFor(user)});
            }).catch(next);
        } else {
            return res.sendStatus(403);
        }
  });
});

// delete category
router.delete('/:category', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    if(req.category.author._id.toString() === req.payload.id.toString()){
      return req.category.remove().then(function(){
        return res.sendStatus(204);
      });
    } else {
      return res.sendStatus(403);
    }
  }).catch(next);
});

module.exports = router;