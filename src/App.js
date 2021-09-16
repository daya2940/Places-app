import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/places/new" component={NewPlaces} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
