import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Words from './Words';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


export default class Lyrics extends Component {
  constructor(props) {
    super(props);
    const answers = props.lyrics.replace(/[.,/#!$%^&*;:{}=_`~()]/g,"").replace(/\s\s+/g, ' ').split(" ");
    this.state = {
      userInput: '',
      answerWords: answers,
      loweredWords: [],
      guessedWords: [],
      displayedWords: [],
      totalWords: answers.length,
      foundWords: 0
    }
    for (var i = 0; i < answers.length; i++) {
      this.state.displayedWords.push('?');
    }
    answers.forEach(word => {
      // this.state.loweredWords.push(word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
      this.state.loweredWords.push(this.sanitizeWord(word));
    })
  }

  sanitizeWord(word) {
      return word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/['\-"«»]/g,"");
  }

  getAllIndices(array, element) {
    let indices = [];
    var idx = array.indexOf(element);
    while (idx !== -1) {
      indices.push(idx);
      idx = array.indexOf(element, idx + 1);
    }

    return indices;
  }

  checkWord(event) {
    let input = this.sanitizeWord(this.state.userInput.trim());
    if (!input) {
      return;
    }
    if (!this.state.guessedWords.includes(input)) {
      let indices = this.getAllIndices(this.state.loweredWords, input);

      if (indices.length) {
        let displayedWords = this.state.displayedWords;
        let foundWords = this.state.foundWords;
        indices.forEach(indice => {
          displayedWords[indice] = this.state.answerWords[indice];
          foundWords++;
        })
        this.setState({
          userInput: '',
          displayedWords: displayedWords,
          guessedWords: [...this.state.guessedWords, input],
          foundWords: foundWords
        })
      }

    }
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  render() {
    return(
      <Container maxWidth="sm">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Lyrics of {this.props.title} ({this.props.artist})
            </Typography>
          </Toolbar>
        </AppBar>
        <AppBar position="sticky">
          <Toolbar style={{ backgroundColor: 'lightblue' }}>
            <Typography variant="h3">
              {this.state.foundWords}/{this.state.totalWords}
            </Typography>
            <Box style={{ paddingLeft: '20%' }}>
            <form noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Words"
                value={this.state.userInput}
                onKeyUp={(this.checkWord.bind(this))}
                onChange={(this.onChange.bind(this))}
              />
            </form>
            </Box>
          </Toolbar>
        </AppBar>
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
          <Grid container justify="center" spacing={1} style={{ marginTop: '5%' }}>
            <Words displayedWords={this.state.displayedWords} />
          </Grid>
        </Grid>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
        </Grid>
      </Container>
    );
  }
}
