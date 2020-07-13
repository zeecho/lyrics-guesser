import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Words from './Words';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));
//
// const classes = useStyles();
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
      foundWords: 0,
      defaultValue: '...',
    }
    for (var i = 0; i < answers.length; i++) {
      this.state.displayedWords.push(this.state.defaultValue);
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
    let input = this.state.userInput;
    input = this.sanitizeWord(input.trim());
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
        let totalWords = this.state.totalWords;
        if (totalWords == foundWords) {
          this.removeInputAndGiveUpButton();
        }
      }

    }
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  removeInputAndGiveUpButton() {
    const wordInput = document.getElementById('word-input-form');
    wordInput.parentNode.removeChild(wordInput);
    const giveUpButton = document.getElementById('give-up-button');
    giveUpButton.parentNode.removeChild(giveUpButton);
  }

  giveUp(event) {
    event.preventDefault();
    this.removeInputAndGiveUpButton();

    this.setState({
      displayedWords: this.state.answerWords
    })
  }

  render() {
    return(
      // <Container maxWidth="sm" className={classes.root}>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              {this.props.title} ({this.props.artist})
            </Typography>
          </Toolbar>
        </AppBar>
        <AppBar position="sticky">
          <Toolbar style={{ backgroundColor: 'lightblue' }}>
            <Typography variant="h3">
              {this.state.foundWords}/{this.state.totalWords}
            </Typography>
            <Box style={{ paddingLeft: '20%' }}>
              <form noValidate autoComplete="off" id="word-input-form">
                <TextField
                  id="word-input"
                  label="Words"
                  value={this.state.userInput}
                  onKeyUp={(this.checkWord.bind(this))}
                  onChange={(this.onChange.bind(this))}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />
              </form>
            </Box>
            <Button id="give-up-button" variant="contained" onClick={this.giveUp.bind(this)}>Give up</Button>
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
