import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";

import "style/App.scss";

import RoutePages from "components/routePages";

const TRACKING_ID = "G-YRWV5J2V9D"; // TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log(body);
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <RoutePages />
        </div>
      </Router>
    );
  }
}

export default App;
