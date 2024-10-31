import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Journey from "./pages/Journey"
import BlueBackgroundWrapper from "./components/BlueBackgroundWrapper"
import Game from "./pages/Game"

function App() {

  return (
<div className="">

<BrowserRouter>
  <BlueBackgroundWrapper>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/Projects" element={<Projects/>} />
<Route path="/skills" element={<Skills/>} />
<Route path="/experience" element={<Journey/>} />
<Route path="/game" element={<Game/>} />
<Route path="*" element={<NotFound/>} />
</Routes>
</BlueBackgroundWrapper>
</BrowserRouter>
</div>
  )
}

export default App
