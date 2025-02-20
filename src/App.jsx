import "./App.css";
import Flip from "./components/Flips";
import lion from "./assets/images/lion.jpg";

function App() {
  return (
    <>
      <h1>FlipCard Game</h1>
      <main className="container">
        <Flip img={lion} />
      </main>
    </>
  );
}

export default App;
