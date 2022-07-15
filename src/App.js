import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./Redux/Store";
import HomePrincipale from "./Components/VisitorDash/HomePage";
import error404 from "./Components/HEAD-FOOT-ERR/Error404";
import Header from "./Components/HEAD-FOOT-ERR/Header";
import Footer from "./Components/HEAD-FOOT-ERR/Footer";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePrincipale} />
          <Route component={error404} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
