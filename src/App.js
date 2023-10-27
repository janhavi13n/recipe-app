import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={process.env.PUBLIC_URL+"/"} element={<Home />} />
          <Route path={process.env.PUBLIC_URL+"/recipes"} element={<Main />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
