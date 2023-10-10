import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Hero from "./components/Hero/Hero"
import Learn from "./components/Learn/Learn"
import Development from "./components/Development/Development"
import Acheivement from "./components/Acheivement/Acheivement"
import Guildeline from "./components/Guideline/Guildeline"
import Plans from "./components/Plans/Plans"
import Content from "./components/Content/Content"
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Learn/>
      <Guildeline/>
      <Development/>
      <Acheivement/>
      <Content/>
      <Plans/>
    </div>
  )
}

export default App
