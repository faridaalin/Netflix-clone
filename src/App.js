import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "./components/styles/app.style";
import Navbar from "./components/elements/Navbar/Navbar";
import Footer from "./components/elements/Footer/Footer";
import Home from "./components/pages/Home";
import MyList from "./components/pages/MyList";
import Shows from "./components/pages/Shows";
import Movies from "./components/pages/Movies";
import Theme from "./components/styles/theme";
import GlobalStyle from "./components/styles/globalStyles";

function App(props) {
  const [dimentions, setDimentions] = useState("");

  return (
    <>
      <Theme>
        <Container height={dimentions}>
          <Navbar setDimentions={setDimentions} />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path="/shows" component={Shows} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/mylist" component={MyList} />
            <Redirect to={"/"} />
          </Switch>
          <Footer />
          <GlobalStyle height={dimentions} />
        </Container>
      </Theme>
    </>
  );
}

export default App;
