import React, { Component } from 'react';
import Lyrics from '../Lyrics/Lyrics';

class GuessPage extends Component {
  constructor() {
    super();
    // this.state = {
    //   lyrics: []
    // }
  }

  // componentDidMount() {
  //   this.getLyrics();
  // }
  //
  // getLyrics = () => {
  //   // const requestBody = {
  //   //   query: `
  //   //     query {
  //   //       lyricss({_id: "${this.props.idSong}"}) {
  //   //         text
  //   //       }
  //   //     }
  //   //   `
  //   // };
  //   const requestBody = {
  //     query: `
  //       query {
  //         lyricss {
  //           text
  //         }
  //       }
  //     `
  //   };
  //   events.find(e => e._id === eventId);
  //
  //   fetch('http://localhost:8000/graphql', {
  //     method: 'POST',
  //     body: JSON.stringify(requestBody),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => {
  //       if (res.status !== 200 && res.status !== 201) {
  //         throw new Error('Failed');
  //       }
  //       return res.json();
  //     })
  //     .then(resData => {
  //       console.log(resData);
  //       // this.setState({
  //       //   lyrics: resData.data.lyricss.text
  //       // })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }
  //
  //
  render() {
    return(
      // <h1>we'll see</h1>
      // <Lyrics lyrics={this.state.lyrics} artist={this.props.artist} title={this.props.title} />
      // <h1>{this.props.location.props.song.artist}</h1>
      <Lyrics lyrics={this.props.location.props.song.text} artist={this.props.location.props.song.artist} title={this.props.location.props.song.title} />
    );
  }
}

export default GuessPage;
