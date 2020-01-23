import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import GuessPage from './Guess';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
        <ListItem key={song.id}>
          <NavLink to={{
            pathname: "/guess",
            props: {
              song
            }
          }}>
            <ListItemText
              primary={song.title}
              secondary={song.artist}
            />
          </NavLink>
        </ListItem>
      )
    })
    return(
      <Grid container>
        <Grid item xs={10} md={10}>
          <Typography variant="h6">
            Songs list
          </Typography>
            <List>
              {songList}
            </List>
        </Grid>
        <Grid item xs={2} md={2}>
            <NavLink to="/add-lyrics">
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </NavLink>
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
