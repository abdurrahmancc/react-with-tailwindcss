import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Pricing from "./Component/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-6xl font-bold mt-16 ">this is our tailwind css</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
