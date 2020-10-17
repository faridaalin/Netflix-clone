import React from "react";
import { Container } from "./components/styles/app.style";
import Navbar from "./components/elements/Navbar/Navbar";
import Footer from "./components/elements/Footer/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
