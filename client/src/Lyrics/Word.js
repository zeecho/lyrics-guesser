import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';

export default class Word extends PureComponent {
  render() {
      return(
        <Paper
          variant="outlined"
          key={this.props.id}
          style={{ width: '30%', paddingTop: '2px', paddingBottom: '2px', align: 'center', textAlign: 'center' }}
        >
          {this.props.word}
        </Paper>
      )
  }
}
