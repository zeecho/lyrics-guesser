import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import GuessPage from './Guess';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableSongs: []
    }
    // this.titleEl = React.createRef();
    // this.artistEl = React.createRef();
    // this.textEl = React.createRef();
  }

  componentDidMount() {
    this.getAvailableSongs();
  }

  getAvailableSongs = () => {
    const requestBody = {
      query: `
        query {
          lyricss {
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
        // console.log(resData);
        this.setState({
          availableSongs: resData.data.lyricss
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const songList = this.state.availableSongs.map(song => {
      return (
        <li key={song._id}>
          <NavLink to={{
            pathname: "/guess",
            props: {
              song
            }
          }}>{song.artist} - {song.title}</NavLink>
        </li>
      )
    })
    return(
      <div>
        <h1>Home</h1>
        <ul>
          {songList}
        </ul>
      </div>
    );
  }
}

export default HomePage;
