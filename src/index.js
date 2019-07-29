import { render } from "react-dom";
import React from "react";
import Map from "./map.js";
import CountySelector from "./county-selecter.js";
import GameSettings from "./start-menu.js";
import Stats from "./stats.js";
import MapNav from "./map-nav.js";
import GameNav from "./game-nav.js";
import { tsExternalModuleReference } from "@babel/types";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapPosition: { lat: 44, long: -72 },
      corectCounty: "county",
      startPosition: null,
      score: 100,
      mapZoom: 7,
      gameStatus: false
      //history array??
    };
  }

  //starts game at random location with low zoom and sets the correct county and resets score
  startGame = (randomPosition, startCounty) => {
    console.log(randomPosition);
    return this.setState({
      score: 100,
      mapZoom: 15,
      corectCounty: startCounty,
      gameStatus: true,
      startPosition: randomPosition,
      mapPosition: randomPosition,
    });
  };

  giveUp = () => {
    return this.setState({
      mapPosition: { lat: 44, long: -72 },
      score: 100,
      mapZoom: 7,
      gameStatus: false
    });
  };

  guessCounty = county => {
    if (county === this.state.corectCounty) {
      alert(`you win! your score was: ${this.state.score}`);
      //TODO make reset function to use in give up and guessCounty
      this.giveUp();
    } else {
      this.scoreChainge();
      alert("wrong!");
    }
  };

  scoreChainge = () => {
    const lastScore = this.state.score;
    return this.setState({ score: lastScore - 1 });
  };

  //can use lastPosition to store history
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
    console.log(this.state);

    return (
      <div>
        <GameNav props={`startPosition, corectCounty ${this.state.score}`} />
        <GameSettings
          startGame={this.startGame}
          giveUp={this.giveUp}
          isGamePlaying={this.state.gameStatus}
        />
        <Stats
          score={this.state.score}
          county={this.state.corectCounty}
          isGamePlaying={this.state.gameStatus}
        />
        <Map
          mapPosition={this.state.mapPosition}
          mapZoom={this.state.mapZoom}
        />
        <MapNav
          moveMap={this.moveMap}
          scoreChainge={this.scoreChainge}
          startPosition={this.state.startPosition}
          mapPosition={this.state.mapPosition}
        />
        <CountySelector
          guessCounty={this.guessCounty}
          corectCounty={this.state.corectCounty}
          isGamePlaying={this.state.gameStatus}
        />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
