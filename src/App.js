import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./Redux/Store";
import HomePrincipale from "./Components/VisitorDash/HomePage";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePrincipale} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
