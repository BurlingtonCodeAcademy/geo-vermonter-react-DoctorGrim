import { render } from "react-dom";
import React from "react";
import Map from './map.js'
import CountySelector from './county-selecter.js'
import Start from './start.js'
import Stats from './stats.js'
import MapNav from './map-nav.js'
import Nav from './nav';
import borderData from "./borders/border.js";
import countyData from "./borders/vtcountyborder.js";
import leafletPip from "@mapbox/leaflet-pip";


class App extends React.Component {
    constructor(props) {
      super(props);
  
     // this.handler = this.handler.bind(this);
    }

    state = {
      mapPosition: { lat: 43, lng: -71 },
      corectCounty: "county",
      points: 10,
      startPositon: { lat: 43, lng: -71 },
      score: 100,
      mapZoom: 7,
    };
    
    render() {
        return (
            <div>
              <Nav props={'stuf'}/>
                <Start props={"stuf"}/>
                <Stats props={"stuf"}/>
                <Map />
                <MapNav props={"stuf"}/>
                <CountySelector props={"stuf"}/>
            </div>
        );
    }

}
render(<App />, document.getElementById("root"));