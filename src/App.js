import Nav from "./nav/nav";
import Intro from "./intro/intro"
import Contact from "./contact/contact";
import About from "./about/about";
import Project from "./portfolio/project"
import Footer from "./footer/footer"
function App() {
  return (
    <div>
      <Nav/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
