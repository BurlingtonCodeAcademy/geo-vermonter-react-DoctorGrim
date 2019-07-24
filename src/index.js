import { render } from "react-dom";
import React from "react";
import L from "leaflet";

const mapStyle = {
  width: "100%",
  height: "400px",
  pointerEvents: 'none'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
  }
  state = { mapPosition: { lat: 49.8419, lng: 24.0315 } };
  handler = (direction) => {
    return this.setState({
      mapPosition:  direction 
    });
  };
  
  render() {
    let north ={lat:1, lng:0}
    let east ={lat:0, lng:1}
    let south ={lat:-1, lng:0}
    let west ={lat:0, lng:-1}
    console.log(this.handler);
    console.log(this.state.mapPosition);

    return (
      <div>
        <Map mapPosition={this.state.mapPosition} />
        <Button direction={north} mapPosition={this.state.mapPosition} handler={this.handler} />
        <Button direction={east} mapPosition={this.state.mapPosition} handler={this.handler} />
        <Button direction={south} mapPosition={this.state.mapPosition} handler={this.handler} />
        <Button direction={west} mapPosition={this.state.mapPosition} handler={this.handler} />
        <div>
          Current mapPosition: lat: {this.state.mapPosition.lat}, lng:{" "}
          {this.state.mapPosition.lng}
        </div>
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
      zoom: 16,
      zoomControl: false,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
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

render(){
  return (
    <button
      onClick={() => {
        this.props.handler({lat: this.props.mapPosition.lat+this.props.direction.lat, lng: this.props.mapPosition.lng+this.props.direction.lng})}}
    >
      move
    </button>
  );
}
};

render(<App />, document.getElementById("root"));
