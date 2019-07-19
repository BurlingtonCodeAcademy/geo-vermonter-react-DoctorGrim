// import React from 'react';
// import L from 'leaflet';
import ReactDOM from 'react-dom';


// class App extends React.Component {
//   state = { markerPosition: { lat: 49.8419, lng: 24.0315 } };
//   moveMarker = () => {
//     const { lat, lng } = this.state.markerPosition;
//     this.setState({
//       markerPosition: {
//         lat: lat + 0.0001,
//         lng: lng + 0.0001, 
//       }
//     });
//   };
//   render() {
//     const { markerPosition } = this.state;
//     return (
//       <div>
//         <Map markerPosition={markerPosition} />
//         <div>Current markerPosition: lat: {markerPosition.lat}, lng: {markerPosition.lng}</div>
//         <button
//           onClick={this.moveMarker}
//         >
//           Move marker
//         </button>
//       </div>
//     );
//   }
// }


// class Map extends React.Component {
//   componentDidMount() {
//     // create map
//     this.map = L.map("map").setView([44.477299, -73.213094], 16);
//     L.tileLayer("https://{s}.tile.OpenStreetMap.org/{z}/{x}/{y}.png", {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(this.map);
//   }

//   render() {
//     return <div style={mapStyle} id="map"></div>
//   }
// }

// const mapStyle={
//   width: '100%',
//   height: '200px',
// }

// ReactDOM.render(<App />, document.getElementById('root'));

import { render } from 'react-dom';
import React from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "200px"
};

class App extends React.Component {
  state = { markerPosition: { lat: 49.8419, lng: 24.0315 } };
  moveMarker = () => {
    const { lat, lng } = this.state.markerPosition;
    this.setState({
      markerPosition: {
        lat: lat + 0.0001,
        lng: lng + 0.0001, 
      }
    });
  };
  render() {
    const { markerPosition } = this.state;
    return (
      <div>
        <Map markerPosition={markerPosition} />
        <div>Current markerPosition: lat: {markerPosition.lat}, lng: {markerPosition.lng}</div>
        <button
          onClick={this.moveMarker}
        >
          Move marker
        </button>
      </div>
    );
  }
}

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    // add marker
    this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  }
  componentDidUpdate({ markerPosition }) {
    // check if position has changed
    if (this.props.markerPosition !== markerPosition) {
      this.marker.setLatLng(this.props.markerPosition);
    }
  }
  render() {
    return (
    // <div id="mapContanier" style={style}>
      <div id="map" style={style} />);
    // </div>);
  }
}


render(<App />, document.getElementById('root'));