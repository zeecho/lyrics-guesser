const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const Lyrics = require('./models/lyrics');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
      type Lyrics {
        _id: ID!
        title: String!
        artist: String!
        text: String!
      }

      input LyricsInput {
        title: String!
        artist: String!
        text: String!
      }

      type RootQuery {
        lyricss: [Lyrics!]!
      }

      type RootMutation {
        createLyrics(lyricsInput: LyricsInput): Lyrics
      }

      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
  rootValue: {
    lyricss: () => {
      return Lyrics.find()
        .then(lyricss => {
          return lyricss.map(lyrics => {
            return { ...lyrics._doc };
          })
        })
        .catch(err => {
          console.log(err);
        });
    },
    createLyrics: (args) => {
      const lyrics = new Lyrics({
        title: args.lyricsInput.title,
        artist: args.lyricsInput.artist,
        text: args.lyricsInput.text
      });
      return lyrics.save().then(result => {
        console.log(result);
        return { ...result._doc };
      }).catch(err => {
        console.log(err);
        throw err;
      });
    }
  },
  graphiql: true
}));

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-hs4dk.azure.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
)
.then(() => {
  app.listen(8000);
})
.catch(err => {
  console.log(err);
});
