import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => {
          return (
            <NavLink
              to={`/api/movies/${movie.id}`}
              key={movie.id}
              activeClassName="saved-active"
            >
              <span className="saved-movie">{movie.title}</span>
            </NavLink>
          );
        })}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
        <div className="home-button">
          <Link to="/addAmovie">Post</Link>
        </div>
      </div>
    );
  }
}
