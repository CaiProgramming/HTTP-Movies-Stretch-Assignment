import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
export default class MovieList extends Component {
  state = {
    movies: []
  };

  componentDidMount = () => {
    axios
      .get(`/api/movies`)
      .then(res => {
        console.log(res);
        this.setState({ movies: res.data });
      })
      .catch(res => console.log(res));
  };

  render() {
    return (
      <div className="movie-list">
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
