import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import  Footer  from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Router />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
