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
          <Route 
            path='/' 
            render={props => <MovieList {...props} movielist={props.movielist} />} />
          {/* <Route path='/movies/:id' component={Movie}/> */}
          <Route 
            path='.movie/:id' 
            render={props => <Movie {...props} movie={props.movie.id} />} />
        </div>
      </div>
    );
  }
}
