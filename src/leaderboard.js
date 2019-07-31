import React from "react";

class Leaderboard extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {name: "",
  score: "test"}
    }

    async componentDidMount() {
      console.log("you are here")
        const response = await fetch("/scores");
        const messageObj = await response.json();
        console.log("The message is: ", messageObj);
        this.setState({
          name: messageObj.leaderboard[0].name,
          score: messageObj.leaderboard[0].score
        });
      }

      render(){
          return(
          <div>
            <h1>Name: {this.state.name}</h1>
            <h3>Score: {this.state.score}</h3>
          </div>

          )
      }
    }

export default Leaderboard;