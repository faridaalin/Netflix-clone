import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Container } from "./components/styles/app.style";
import Navbar from "./components/elements/Navbar/Navbar";
import Footer from "./components/elements/Footer/Footer";
import Home from "./components/pages/Home";
import MyList from "./components/pages/MyList";
import Shows from "./components/pages/Shows";
import Movies from "./components/pages/Movies";

function App() {
  return (
    <Container>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path="/shows" component={Shows} />
        <Route path="/movies" component={Movies} />
        <Route path="/mylist" component={MyList} />
        <Redirect to={"/"} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default withRouter(App);
