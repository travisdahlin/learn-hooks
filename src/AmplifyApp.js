import React, { Component } from "react";
import Routes from "./Routes";
import { withAuthenticator } from "aws-amplify-react";

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default withAuthenticator(App, {
  includeGreetings: true
});
