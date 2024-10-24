import "./App.css";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import SingleMovie from "./SingleMovie/SingleMovie";
import Error from "./Error";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={<SingleMovie />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
