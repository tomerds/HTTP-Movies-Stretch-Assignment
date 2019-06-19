import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from './MovieCard';
import NewMovie from './NewMovie';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      title: '',
      director: '',
      metascore: '',
      stars: ''
    };
  }

  componentDidMount() {
    // fill me in with an HTTP Request to `localhost:5000/api/movies`
    const myPromise = axios.get('http://localhost:5000/api/movies');
    myPromise
      .then(res => {
        this.setState({ movies: res.data })
      })
      .catch(err => console.log(err));
    this.setState({ movies: [] });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    const newMovie = {
      title: this.state.title,
      director: this.state.director,
      metascore: this.state.metascore,
      stars: [this.state.stars],
    }
    const promise = axios.post('http://localhost:5000/api/movies', newMovie);
    promise.then(res => this.setState({
      movies: res.data,
      title: '',
      director: '',
      metascore: '',
      stars: ''
    }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="movie-list">
        <NewMovie
          onChange={this.handleChange}
          titleValue={this.state.title}
          directorValue={this.state.director}
          metaValue={this.state.metascore}
          starsValue={this.state.stars}
          submit={this.onSubmit}
        />
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}
