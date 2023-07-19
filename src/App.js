import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./PAGES/HomePage/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h1>Error 404: Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
