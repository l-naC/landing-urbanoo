import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Mentions from "./components/Mentions";
import Politic from "./components/Politic";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route path="/mentions"  component={Mentions}/>
        <Route path="/politic"  component={Politic}/>
        <Route component={ErrorPage} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
