import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
// eslint-disable-next-line
import MovieCard from './Movies/MovieCard';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          {/* <Route exact path='/' component={MovieList}/> */}
          <Route render={props => <MovieList movielist={props.movielist} />} />
          {/* <Route path='/movies/:id' component={Movie}/> */}
          <Route render={props => <Movie movie={props.movie} />} />
        </div>
      </div>
    );
  }
}
