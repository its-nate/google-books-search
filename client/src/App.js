import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          {/* <Route exact path="/" component={Boo} /> */}
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={Saved} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
