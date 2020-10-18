import React from "react";
import { Switch, Route } from "react-router-dom";
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
      {/* <Home /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/mylist" component={MyList} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
