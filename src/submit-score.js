import React from "react";

class SubmitScore extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: null,
      input: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const response = await fetch("/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: this.state.input, date: this.state.date, score: this.props.score })
    });
    const result = await response.text();
    console.log("Result is: ", result);
    if (result === "Success") {
      const nextResponse = await fetch("/message");
      const json = nextResponse.json();
      this.setState({
        name: json.message,
        date: json.date
      });
    }
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
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
