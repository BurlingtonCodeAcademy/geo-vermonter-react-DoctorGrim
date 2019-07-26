import React, { useEffect, useRef } from "react";
import L from "leaflet";
import borderData from "./borders/border.js";

const style = {
  width: "100%",
  height: "400px"
};

function Map({mapPosition}) {
  // create map

  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [mapPosition.lat, mapPosition.long],
      zoom: 7,
      zoomControl: true,
      layers: [
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  })
      ]
    });
    const borderLayer = L.geoJSON(borderData);
    borderLayer.setStyle({fill: false})
    borderLayer.addTo(mapRef.current);}, []);
 
  useEffect(()=>{
    mapRef.current.panTo([mapPosition.lat, mapPosition.long]);
  },
  [mapPosition]);

  // add layer
  // const layerRef = useRef(null);
  // useEffect(() => {
  //   layerRef.current = L.layerGroup().addTo(mapRef.current);
  // }, []);

  // update markers
  // useEffect(
  //   () => {
  //     layerRef.current.clearLayers();
  //     markersData.forEach(marker => {
  //       L.marker(marker.latLng, { title: marker.title }).addTo(
  //         layerRef.current
  //       );
  //     });
  //   },
  //   [markersData]
  // );

  return <div id="map" style={style} />;
}

export default Map;
