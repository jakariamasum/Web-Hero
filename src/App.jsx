import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Hero from "./components/Hero/Hero"
import Learn from "./components/Learn/Learn"
import Development from "./components/Development/Development"
import Acheivement from "./components/Acheivement/Acheivement"
import Guildeline from "./components/Guideline/Guildeline"
import Plans from "./components/Plans/Plans"
import Content from "./components/Content/Content"
import Review from "./components/Review/Review"
import Connect from "./components/Connect/Connect"
import Educator from "./components/Educator/Educator"
import Footer from "./components/Footer/Footer"
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
      <Review/>
      <Plans/>
      <Connect/>
      <Educator/>
      <Footer/>
    </div>
  )
}

export default App
