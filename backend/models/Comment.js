var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  stars: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  services: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }
}, {timestamps: true});

// Requires population of author
CommentSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    body: this.body,
    stars: this.stars,
    createdAt: this.createdAt,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Comment', CommentSchema);