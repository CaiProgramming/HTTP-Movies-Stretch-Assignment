import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  margin: 10px;
  border: none;
  border-bottom: 2px black solid;
  &:focus {
    outline: none;
  }
`;

const Btn = styled.button`
  margin: 10px;
  border-radius: 10px;
  border-style: solid;
  cursor: pointer;
`;
class MovieCard extends React.Component {
  state = {
    title: "",
    dir: "",
    meta: "",
    stars: []
  };
  textHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  submitHandler = () => {
    if (this.state.stars) {
      let stars = this.state.stars.split(",");
      axios
        .post("/api/movies", {
          title: this.state.title,
          director: this.state.dir,
          metascore: this.state.meta,
          stars: stars
        })
        .then(res => {
          if (res) {
            this.props.history.push("/");
          }
        });
    }
  };
  render() {
    return (
      <div className="movie-card">
        <h2>Add you're favorite movie</h2>
        <div>
          <Input
            type="text"
            id="title"
            placeholder="Movie title"
            value={this.state.title}
            onChange={this.textHandler}
          />
        </div>
        <div>
          <Input
            type="text"
            id="dir"
            placeholder="Director"
            value={this.state.dir}
            onChange={this.textHandler}
          />
        </div>
        <div>
          <Input
            type="text"
            id="meta"
            placeholder="Metascore"
            value={this.state.meta}
            onChange={this.textHandler}
          />
        </div>
        <div>
          <Input
            type="text"
            id="stars"
            placeholder="Stars (use a , to seperate actors)"
            value={this.state.stars}
            onChange={this.textHandler}
          />
        </div>
        <Btn onClick={this.submitHandler}>Submit Movie</Btn>
      </div>
    );
  }
}

export default withRouter(MovieCard);
