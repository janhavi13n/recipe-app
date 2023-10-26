import './App.css';
import { BrowserRouter } from "react-router-dom";
import  Footer  from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import  Home  from "./components/Home";
import  Main  from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
          <Route
            path={process.env.PUBLIC_URL + "/recipes"}
            element={<Main />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
