import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Movie from "./components/Movie";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <NavBar />
          <Home />
        </>} />
        <Route path="/movie/:id" element={<>
          <NavBar />
          <Movie />
        </>} />
        <Route path="/search/:search" element={<>
          <NavBar />
          <Search />
        </>} />
        <Route path="*" element={<>
          <NavBar />
          <NotFound />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;