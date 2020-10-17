import React from "react";
import { Container } from "./components/styles/app.style";
import Navbar from "./components/elements/Navbar/Navbar";
import Footer from "./components/elements/Footer/Footer";
import Home from "./components/pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Navbar />
        <Home />
        <Footer />
      </Container>
    </Provider>
  );
}

export default App;
