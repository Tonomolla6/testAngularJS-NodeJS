const mongoose = require('mongoose');
const Match = mongoose.model('Match');

const resolvers = {
    Query: {
        match: (root, {slug},context) => {          
          // example for authentication
          if (!context.user) throw new context.AuthenticationError('You must be logged in');
          
          return Match.findOne({slug: slug}).exec();
        }
    },
    Mutation: {
        createMatch: (root, {input}) => {
            const match = new Match(input);
    
            match.save();
            return match;
        }
    }
};
// 
export default resolvers;