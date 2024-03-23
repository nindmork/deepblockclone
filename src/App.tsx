import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Navbar  from "./navigation/navbar"
import  Footer  from "./navigation/footer"
import  Home  from "./Home"
import './styles/style.css';


const App = () => {
  

  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/deepblockclone/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App
