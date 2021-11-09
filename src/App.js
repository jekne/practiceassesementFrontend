import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SpaceDetails from "./pages/SpaceDetails";
import Homepage from "./pages/Homepage";
import NewSignUp from "./pages/NewUserSignUp/newUserSignUp";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route path="/newsignup" component={NewSignUp} />
        <Route path="/space/:id" component={SpaceDetails} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
