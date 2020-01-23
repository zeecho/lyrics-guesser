import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddLyricsPage extends Component {
  constructor(props) {
    super(props);
    // this.titleEl = React.createRef();
    // this.artistEl = React.createRef();
    // this.textEl = React.createRef();
    this.titleInputValue = '';
    this.artistInputValue = '';
    this.textInputValue = '';
  }

  handleTitleInput = event => {
    this.setState({
      titleInputValue: event.target.value
    })
  }

  handleArtistInput = event => {
    this.setState({
      artistInputValue: event.target.value
    })
  }

  handleTextInput = event => {
    this.setState({
      textInputValue: event.target.value
    })
  }
  submitHandler = event => {
    event.preventDefault();
    // const title = this.titleEl.current.value;
    // const title = this.refs.titlEl.getValue();
    const title = this.state.titleInputValue;
    const artist = this.state.artistInputValue;
    const text = this.state.textInputValue;
    // const artist = this.artistEl.current.value;
    // const text = this.textEl.current.value;
    //
    const requestBody = {
      query: `
        mutation {
          createLyrics(lyricsInput: {
            title: "${title}",
            artist: "${artist}",
            text: "${text}"
          }) {
            _id
            title
            artist
            text
          }
        }
      `
    };

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      })

    // console.log(title, artist, text);
  }

  render() {
    return(
      <Grid>
        <Typography variant="h4">Add Lyrics</Typography>
        <form onSubmit={this.submitHandler} noValidate autoComplete="off">
          <div>
            <TextField id="title" label="Title" onChange={this.handleTitleInput} />
          </div>
          <div>
            <TextField id="artist" label="Artist" onChange={this.handleArtistInput} />
          </div>
          <div>
            <TextField id="text" label="Text" onChange={this.handleTextInput} />
          </div>
          <div>
            <Button variant="outlined"  type="submit">Submit</Button>
          </div>
        </form>
      </Grid>
    );
  }
}

export default AddLyricsPage;
