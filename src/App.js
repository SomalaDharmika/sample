/*this is class component*/
/*import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "sona",
  };
  render() {
    return (
      <div>
        <h2>hi welcome {this.state.name}</h2>
      </div>
    );
  }
}*/

/* functional component*/
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("functioncompo");
  return (
    <div>
      <h2>hi welcome {name}</h2>
    </div>
  );
};

export default App;
