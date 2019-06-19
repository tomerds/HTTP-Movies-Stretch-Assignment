import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      savedList: []
    }
  }

  addToSavedList = (movie) => {
    console.log(this.state.savedList)
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  }

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={(props) => {
          return (<Movie {...props} addToSavedList={this.addToSavedList} />)
        }} />
      </div>
    )
  }
}
