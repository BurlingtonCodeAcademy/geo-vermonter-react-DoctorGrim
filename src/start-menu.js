import React from "react";
import borderData from "./borders/border.js";
import countyData from "./borders/vtcountyborder.js";
import leafletPip from "@mapbox/leaflet-pip";
import L from "leaflet";

const GameSettings = ({ startGame, giveUp, isGamePlaying }) => {
  //   let countyData2 =L.geoJSON(countyData);

  const getRandomStart = () => {
    const vtMinLong = -73.42494466485307;
    const vtMaxLong = -71.510225353531;
    const vtMinLat = 42.730315121762715;
    const vtMaxLat = 45.00706691759828;

    let vtBorderData = L.geoJSON(borderData);
    console.log(vtBorderData)

    let latRand = Math.random() * (vtMaxLat - vtMinLat) + vtMinLat;
    let longRand = Math.random() * (vtMaxLong - vtMinLong) + vtMinLong;

    //checks if [lat, long] is a  point inside vtBorderData and returns the point if true?
    const layerLength = leafletPip.pointInLayer(
      [longRand, latRand],
      vtBorderData
    ).length;

    if (layerLength) {
        return { lat: latRand, long: longRand };
    } else {
        getRandomStart();
    }
  };


  const getCounty=(location)=>{

    let vtCountyData = L.geoJSON(countyData);

    let countyArr=leafletPip.pointInLayer(
        [location.long, location.lat],
        vtCountyData)

        return countyArr[0].feature.properties.CNTYNAME
    };


  return (
    <div>
      <button disabled={isGamePlaying}
        onClick={() => {
          let randomPosition = getRandomStart();
          let startCounty = getCounty(randomPosition);
          startGame(randomPosition, startCounty);
        }}
      >
        start
      </button>
      <button disabled={!isGamePlaying} onClick={()=>giveUp()}>Give Up</button>
    </div>
  );
};

export default GameSettings;