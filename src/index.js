import { render } from "react-dom";
import React from "react";
import Map from "./map.js";
import CountySelector from "./county-selecter.js";
import Start from "./start.js";
import Stats from "./stats.js";
import MapNav from "./map-nav.js";
import Nav from "./nav";
import borderData from "./borders/border.js";
import countyData from "./borders/vtcountyborder.js";
import leafletPip from "@mapbox/leaflet-pip";

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.moveMap = this.moveMap.bind(this);
  }

  state = {
    mapPosition: { lat: 44, long: -72 },
    corectCounty: "county",
    points: 10,
    startPositon: { lat: 44, long: -72 },
    score: 100,
    mapZoom: 7,
    gameStatus: "start"
  };

  moveMap = (direction) => {
    const lastPosition = this.state.mapPosition;
    return this.setState({
      mapPosition: {
        lat: lastPosition.lat + direction.lat,
        long: lastPosition.long + direction.long
      }
    });
  };

  render() {
    return (
      <div>
        <Nav props={`mapPosition, ${this.state.score}`} />
        <Start props={"intial sate"} />
        <Stats props={`score, county, start psoition`} />
        <Map mapPosition={this.state.mapPosition} />
        <MapNav
          moveMap={this.moveMap}
          onClick={()=>this.setState({score: -1})}
        />
        <CountySelector props={"county, gameStatus"} />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
