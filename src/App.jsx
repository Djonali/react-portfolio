import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>     
      <Contact></Contact>
    </div>
  );
}

export default App;
