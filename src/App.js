import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
