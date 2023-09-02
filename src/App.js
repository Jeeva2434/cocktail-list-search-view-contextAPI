import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Navbar/>
        <section className="App_view container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cocktail/:id" element={<SingleCocktail/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App;
