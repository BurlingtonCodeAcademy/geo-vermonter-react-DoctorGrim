import { render } from "react-dom";
import React from "react";
import L from "leaflet";
import borderData from "./borders/border.js";
import countyData from "./borders/vtcountyborder.js";
import leafletPip from "@mapbox/leaflet-pip";


class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.handler = this.handler.bind(this);
    }
    state = {
      mapPosition: { lat: 43, lng: -71 },
      corectCounty: "county",
      points: 10,
      startPositon: { lat: 43, lng: -71 },
    };
    render() {
        return (
            <div>

            </div>
        );
    }

}
render(<App />, document.getElementById("root"));