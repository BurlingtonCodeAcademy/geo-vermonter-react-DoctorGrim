import React from "react";

const MapNav = ({ moveMap }) => {
  const north = { lat: 1, long: 0 };
  const south = { lat: -1, long: 0 };
  const east = { lat: 0, long: 1 };
  const west = { lat: 0, long: -1 };
  return (
    <div>
      <button onClick={() => moveMap(north)}>north</button>
      <button onClick={() => moveMap(south)}>south</button>
      <button onClick={() => moveMap(east)}>east</button>
      <button onClick={() => moveMap(west)}>west</button>
    </div>
  );
};

export default MapNav;
