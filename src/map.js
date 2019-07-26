import React, { useEffect, useRef } from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "400px"
};

function Map({ markersData }) {
  // create map

  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [44, -73],
      zoom: 7,
      layers: [
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  })
      ]
    });
  }, []);
 
  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

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
