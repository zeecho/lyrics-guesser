import React, { Component } from 'react';
import Word from './Word';

export default class Words extends Component {
  render() {
    return this.props.displayedWords.map((word, id) => {
      return(
        <Word id={id} word={word} />
      )
    })
  }
}
