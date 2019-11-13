import React, { Component } from "react";
import "./Comic.css";
import { Container, Row, Col } from "react-bootstrap";
import Comic from "./Comic";

class ComicList extends Component {
  state = {
    comics: []
  };

  constructor(props) {
    super(props);
    fetch("https://gateway.marvel.com:443/v1/public/characters", {
      method: "GET",
      headers: {
        ts: "marvel",
        apikey: "7cd30d3697116382070d9597a4e7efd2",
        hash: "9ce76949b277621ebd38b71889f6f53e",
      },
      mode: 'no-cors'
    })
      .then(response => response.json())
      .then(jsonData => {
        // jsonData is parsed json object received from url
        console.log("This is the data!")
        console.log(jsonData);

        //Cambio el estado de la aplicación
        this.setState({
            comics: jsonData.results.comics.items
        });
        console.log("The state is");
        console.log(this.state);
      })
      .catch(error => {
        // handle your errors here
        console.error(error);
      });
  }

  render() {
    const comics = this.state.comics.map((item, index) => {
      return <Comic name={item.name} uri={item.resourceURI} key={index} />;
    });

    return (
      <div className="App">
        <Container>
            {comics}
        </Container>
      </div>
    );
  }
}

export default ComicList;
