import React from "react";

const Stats = ({ score, county, isGamePlaying }) => {
  console.log(isGamePlaying);
  
    return (
    <div>
      <p>score: {score}</p>
      <p hidden = {!isGamePlaying}>county: ?</p>
      <p hidden = {isGamePlaying}>county: {county}</p>
    </div>
  );
};

export default Stats;
