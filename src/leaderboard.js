import React from "react";

class Leaderboard extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {}
    }

    async componentDidMount() {
        const response = await fetch("/message");
        const messageObj = await response.json();
        console.log("The message is: ", messageObj);
        this.setState({
          name: messageObj.name,
          date: messageObj.date,
          score: messageObj.score
        });
      }

      render(){
          return(
          <div>
            <h1>Name: {this.state.name}</h1>
            <h3>Date: {this.state.date}</h3>
            <h3>Score: {this.state.score}</h3>
          </div>

          )
      }
    }

export default Leaderboard;