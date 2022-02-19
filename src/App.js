import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./components/pages/Home";

import ExampleFetching from "./components/fetching/ExampleFetching";
import ExampleTrigger from "./components/trigger/ExampleTrigger";
import ExampleLoading from "./components/loading/ExampleLoading";
import ExampleErrorHandling from "./components/errorHandling/ExampleErrorHandling";
import ExampleWithForms from "./components/withForms/ExampleWithForms";

import Footer from "./components/pages/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/exampleData-fetching">
                  1. Data fetching with react hooks
                </Link>
              </li>
              <li>
                <Link to="/exampleTrigger">
                  2. Trigger a hook programmatically/manually
                </Link>
              </li>
              <li>
                <Link to="/exampleLoading">
                  3. Loading indicator with react hooks
                </Link>
              </li>
              <li>
                <Link to="/exampleError-handling">
                  4. Error handling with react hooks
                </Link>
              </li>
              <li>
                <Link to="/exampleWith-forms">
                  5. Fetching data with forms and react
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/exampleData-fetching" component={ExampleFetching} />
            <Route path="/exampleTrigger" component={ExampleTrigger} />
            <Route path="/exampleLoading" component={ExampleLoading} />
            <Route
              path="/exampleError-handling"
              component={ExampleErrorHandling}
            />
            <Route path="/exampleWith-forms" component={ExampleWithForms} />

            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
