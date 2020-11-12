const mongoose = require('mongoose');
const Match = mongoose.model('Match');
const request = require("../../../routes/api/requests");

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
            console.log(input);
            const match = new Match(input);
    
            console.log(match);
            match.save();
            console.log(match);
            return match;
        },
        getMatches: async (root, {input}) => {
            console.log(input)
            if (input.username){
                let usuario = await request.getUser(input.username);
                return Match.find({'author':usuario.profile.username}).exec();
                return usuario;
                console.log(usuario)
                return Match.find({'author':usuario.username}).exec();
            }
        }
    }
};
// 
export default resolvers;