import "./App.css";
import Nav from "./components/Nav";
import { Container } from "./components/Container.style";
import Hero from "./components/Hero";
import Converter from "./components/Converter";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
        <Hero />
        <Converter />
      </Container>
    </div>
  );
}

export default App;
