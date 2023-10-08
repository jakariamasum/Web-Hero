import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Hero from "./components/Hero/Hero"
import Learn from "./components/Learn/Learn"
import Development from "./components/Development/Development"
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Learn/>
      <Development/>
    </div>
  )
}

export default App
