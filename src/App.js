import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./home";
import Detail from "./detail";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>|
        <Link to={`${process.env.PUBLIC_URL}/detail/21.9769/96.0869`}>
          Nay P Daw
        </Link>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <Home />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/home`}>
            <Home />
          </Route>
          <Route
            path={`${process.env.PUBLIC_URL}/detail/:lat/:lng`}
            component={Detail}
          >
            {/* <Detail /> */}
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
