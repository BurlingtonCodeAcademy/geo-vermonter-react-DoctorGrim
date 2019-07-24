import { render } from "react-dom";
import React from "react";
import L from "leaflet";
import borderData from "./border.js";
import countyData from "./vtcountyborder";
import leafletPip from "@mapbox/leaflet-pip";


const mapStyle = {
  width: "100%",
  height: "400px",
  pointerEvents: "none"
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
let vtMinLng=-73.42494466485307;
let vtMaxLng = -71.51022535353107;

let vtMinLat=42.730315121762715;
let vtMaxLat = 45.00706691759828

let borderData2 = L.geoJSON(borderData);
function genmerateRandStart(minLat, maxLat, minLng, maxLng){

let latRand = getRandomArbitrary(minLat, maxLat);
let lngRand = getRandomArbitrary(minLng, maxLng);

const layerLength = leafletPip.pointInLayer(
  [lngRand, latRand],
  borderData2
).length;

if(layerLength){
return { lat: latRand, lng: lngRand }
}else{
  genmerateRandStart(vtMinLat, vtMaxLat, vtMinLng, vtMaxLng)
}

}

let randStart = genmerateRandStart(vtMinLat, vtMaxLat, vtMinLng, vtMaxLng);

let countyData2 =L.geoJSON(countyData);

function guess(county, start){
  
  const layerLength2 = leafletPip.pointInLayer(
    [start.lat, start.lng],
    countyData2
  ).length;

  if (layerLength2){
    console.log('you win!');
  }else{
    console.log('you lose')
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
  }
  state = {
    mapPosition: randStart,
    corectCounty: "county",
    points: 10,
    startPositon: randStart
  };

  

  handler = (direction, points) => {
  
    return this.setState({
      mapPosition: direction,
      points: points-1
    });
  };

  render() {
    let north = { lat: 1, lng: 0 };
    let east = { lat: 0, lng: 1 };
    let south = { lat: -1, lng: 0 };
    let west = { lat: 0, lng: -1 };


    return (
      <div>
        score = {this.state.points}
        <Map mapPosition={this.state.mapPosition} />
        <Button
          direction={north}
          mapPosition={this.state.mapPosition}
          handler={this.handler}
          points={this.state.points}
        />
        <Button
          direction={east}
          mapPosition={this.state.mapPosition}
          handler={this.handler}
          points={this.state.points}
        />
        <Button
          direction={south}
          mapPosition={this.state.mapPosition}
          handler={this.handler}
          points={this.state.points}
        />
        <Button
          direction={west}
          mapPosition={this.state.mapPosition}
          handler={this.handler}
          points={this.state.points}
        />
        <div>
          Current mapPosition: lat: {this.state.mapPosition.lat}, lng:{" "}
          {this.state.mapPosition.lng}
        </div>
        <ul>
          <li><button onClick={guess('ADDISON',this.state.startPositon)}>Addison</button></li>
          <li><button>Bennington</button></li>
          <li><button>Caledonia</button></li>
          <li><button>Chittenden</button></li>
          <li><button>Essex</button></li>
          <li><button>Franklin</button></li>
          <li><button>Grand Isle</button></li>
          <li><button>Lamoille</button></li>
          <li><button>Orange</button></li>
          <li><button>Orleans</button></li>
          <li><button>Rutland</button></li>
          <li><button>Washington</button></li>
          <li><button>Windham</button></li>
          <li><button>Windsor</button></li>
        </ul>
      </div>
    );
  }
}

class Map extends React.Component {
  componentDidMount() {
    console.log(this.props.mapPosition);
    // create map
    this.map = L.map("map", {
      center: [this.props.mapPosition.lat, this.props.mapPosition.lng],
      zoom: 15,
      zoomControl: false,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
    this.borderData = L.geoJSON(borderData);
    this.borderData.addTo(this.map);
    this.countyData =L.geoJSON(countyData);
    this.countyData.addTo(this.map);
  }
  componentDidUpdate({ mapPosition }) {
    // check if position has changed
    if (this.props.mapPosition !== mapPosition) {
      this.map.panTo(this.props.mapPosition);
    }
  }
  render() {
    return <div id="map" style={mapStyle} />;
  }
}

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.handler({
            lat: this.props.mapPosition.lat + this.props.direction.lat,
            lng: this.props.mapPosition.lng + this.props.direction.lng
          }, this.props.points);
        }}
      >
        move
      </button>
    );
  }
}

render(<App />, document.getElementById("root"));
