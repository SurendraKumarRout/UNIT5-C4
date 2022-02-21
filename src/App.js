import logo from './logo.svg';
import './App.css';

import { Mainpage } from "./components/Mainpage"
import {Search} from "./components/Search"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* <Mainpage/> */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
