import React from "react";
import Posts from "./Posts";
import Postform from "./Postform";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Postform />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
