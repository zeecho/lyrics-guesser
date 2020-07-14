import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import {sanitizeWord} from './utils';

export default class Word extends PureComponent {
  constructor(props){
    super(props);
    this.sanitizeWord = sanitizeWord.bind(this);
  }

  render() {
      return(
        <Paper
          variant="outlined"
          key={this.props.id}
          style={{ width: '30%', paddingTop: '2px', paddingBottom: '2px', align: 'center', textAlign: 'center', backgroundColor: this.props.guessedWords.indexOf(this.sanitizeWord(this.props.word)) == -1 ? 'grey' : 'white' }}
        >
          {this.props.word}
        </Paper>
      )
  }
}
