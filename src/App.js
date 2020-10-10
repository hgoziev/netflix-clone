import React from "react";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom";
import "./css/App.css";
import Login from "./pages/Login";
import ChoosePlan from "./pages/ChoosePlan";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/choose-plan" component={ChoosePlan} />
        <Route path="/search-page" component={SearchPage} />
      </Switch>
    </div>
  );
}
export default App;
