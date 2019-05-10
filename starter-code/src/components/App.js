import React, { Component } from "react";
import Navbar from "./navbar";
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <div>
            <form>
              {/* <FormField label='' type='' placeholder=''/> */}
            </form>
          </div>
        </div>
    );
  }
}

export default App;