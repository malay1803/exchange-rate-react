import "./App.css";
import Nav from "./components/Nav";
import { Container } from "./components/Container.style";
import CurrencyExchange from "./components/CurrencyExchange";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav/>
        {/* <CurrencyExchange /> */}
        <Hero/>
      </Container>
    </div>
  );
}

export default App;
