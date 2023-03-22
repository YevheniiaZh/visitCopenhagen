
import './App.css';
import logo from "./assets/logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import GalleryReview from './GalleryReview';
import ContactUs from './ContactUs';


function App() {
  return (
  <Router>
    <nav>
      <Link className="navLink" to="/"><img src={logo} width="150px" alt="mermaid logo"/></Link>
      <Link  className="navLink" to="/GalleryReview">Gallery Review</Link>
      <Link className="navLink" to="/ContactUs">ContactUs</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/GalleryReview" element={<GalleryReview/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
    </Routes>
  </Router>
  );
}

export default App;
 