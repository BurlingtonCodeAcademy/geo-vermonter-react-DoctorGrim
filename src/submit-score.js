import React from "react";

class SubmitScore extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const response = await fetch("/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: this.state.name, score: this.props.score })
    });
    const result = await response.text();
    console.log("Result is: ", result);
    if (result === "Success") {
      const nextResponse = await fetch("/scores");
      const json = nextResponse.json();
      this.setState({
        name: json.message,
      });
    }
  }

  handleInputChange(e) {
    this.setState({
        name: e.target.value
    });
  }

  render() {
    return (
      <div className="SubmitScore">
        <form onSubmit={this.handleSubmit} method="POST" action="/message">
          <label htmlFor="message">Name:</label>
          <br />
          <input
            onChange={this.handleInputChange}
            name="name"
            placeholder="name"
          />
          <input type="submit" value="New Message" />
        </form>
      </div>
    );
  }
}

export default SubmitScore;
