import React, { Component } from "react";

class Postform extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label>title</label>
            <input
              name="title"
              type="text"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>

          <div>
            <label>body</label>
            <textarea
              value={this.state.body}
              name="body"
              onChange={this.onChange}
            />
          </div>
        </form>
        <button type="submit">submit</button>
      </div>
    );
  }
}

export default Postform;
