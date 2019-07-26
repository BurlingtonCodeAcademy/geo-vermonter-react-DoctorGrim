import React from "react";

const MapNav = ({ moveMap, scoreChainge, startPosition, mapPosition }) => {
  const north = { lat: mapPosition.lat + 1, long: mapPosition.long };
  const south = { lat: mapPosition.lat - 1, long: mapPosition.long };
  const east = { lat: mapPosition.lat, long: mapPosition.long + 1 };
  const west = { lat: mapPosition.lat, long: mapPosition.long - 1 };
  return (
    <div>
      <button
        onClick={() => {
          moveMap(north);
          scoreChainge();
        }}
      >
        north
      </button>
      <button
        onClick={() => {
          moveMap(south);
          scoreChainge();
        }}
      >
        south
      </button>
      <button
        onClick={() => {
          moveMap(east);
          scoreChainge();
        }}
      >
        east
      </button>
      <button
        onClick={() => {
          moveMap(west);
          scoreChainge();
        }}
      >
        west
      </button>
      <button
        onClick={() => {
          moveMap(startPosition);
          scoreChainge();
        }}
      >
        home
      </button>
    </div>
  );
};

export default MapNav;
