import React, { Component } from 'react';

class AddLyricsPage extends Component {
  constructor(props) {
    super(props);
    this.titleEl = React.createRef();
    this.artistEl = React.createRef();
    this.textEl = React.createRef();
  }

  submitHandler = event => {
    event.preventDefault();
    const title = this.titleEl.current.value;
    const artist = this.artistEl.current.value;
    const text = this.textEl.current.value;

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
      <div>
        <h1>Add Lyrics</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={this.titleEl} />
          </div>
          <div>
            <label htmlFor="artist">Artist</label>
            <input type="text" id="artist" ref={this.artistEl} />
          </div>
          <div>
            <label htmlFor="text">Text</label>
            <input type="text" id="text" ref={this.textEl} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddLyricsPage;
