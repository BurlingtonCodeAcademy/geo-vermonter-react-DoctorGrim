import { render } from "react-dom";
import React from "react";
import Map from "./map.js";
import CountySelector from "./county-selecter.js";
import GameSettings from "./start-menu.js";
import Stats from "./stats.js";
import MapNav from "./map-nav.js";
import GameNav from "./game-nav.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapPosition: { lat: 44, long: -72 },
      corectCounty: "county",
      startPosition: { lat: 44, long: -72 },
      score: 100,
      mapZoom: 7,
      gameStatus: "start"
      //history array??
    };
  }

  //starts game at random location with low zoom and sets the corect county and resets score
startGame = (randomPosition, startCounty)=>{
  return this.setState({
    startPosition: randomPosition,
    mapPosition: randomPosition,
    score: 100,
    mapZoom: 15,
    corectCounty: startCounty,
  });
}

  scoreChainge = () => {
    const lastScore = this.state.score;
    return this.setState({ score: lastScore - 1 });
  };

  moveMap = direction => {
    const lastPosition = this.state.mapPosition;
    return this.setState({
      mapPosition: {
        lat: direction.lat,
        long: direction.long
      }
    });
  };

  render() {
    console.log(this.state.mapPosition)
    return (
      <div>
        <GameNav props={`mapPosition, ${this.state.score}`} />
        <GameSettings startGame={this.startGame} />
        <Stats props={`score, county, start psoition`} />
        <Map mapPosition={this.state.mapPosition} />
        <MapNav
          moveMap={this.moveMap}
          scoreChainge={this.scoreChainge}
          startPosition={this.state.startPosition}
          mapPosition={this.state.mapPosition}
        />
        <CountySelector props={"county, gameStatus"} />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
