import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
    const answers = props.lyrics.replace(/\s\s+/g, ' ').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
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
      this.state.loweredWords.push(word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    })
  }

  renderWords() {
    return this.state.displayedWords.map((word, id) => {
      return(
        <Paper variant="outlined" key={id} style={{ width: '30%', paddingTop: '2px', paddingBottom: '2px', align: 'center', textAlign: 'center' }}>{word} </Paper>
      )
    }

    )
  }

  getAllIndices(array, element) {
    let indices = [];
    var idx = array.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = array.indexOf(element, idx + 1);
    }

    return indices;
  }

  checkWord(event) {
    let input = this.state.userInput.trim().toLowerCase();
    if (!input) {
      return;
    }
    if (!this.state.guessedWords.includes(input)) {
      let indices = this.getAllIndices(this.state.loweredWords, input);

      if (indices.length) {
        this.state.guessedWords.push(input);
        indices.forEach(indice => {
          this.state.displayedWords[indice] = this.state.answerWords[indice];
          this.state.foundWords++;
        })
        this.setState({
          userInput: ''
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
            {this.renderWords()}
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
