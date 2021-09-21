import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" component={Users} exact />
          <Route path="/places/new" component={NewPlaces} exact />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
