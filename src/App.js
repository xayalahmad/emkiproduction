import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import SplideSlider from './components/Home/SplideSlider/SplideSlider'
import './tailwind.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from './MuiTheme'
import { ThemeProvider } from "@mui/material";
import Events from "./components/Events/Events";
import Blog from "./components/Blog/Blog";
import { useSelector } from 'react-redux';
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import BlogInfoCard from "./components/Blog/BlogInfoCard/BlogInfoCard";

function App() {
  const { mood } = useSelector(state => state.mood)

  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/events" element={<Events/>} />
    <Route  path="/blog" element={<Blog/>} />
    <Route  path="/about" element={<About/>} />
    <Route  path="/blogdetail" element={<BlogInfoCard/>} />
    </Routes>
    {/* <Footer/> */}
 
    </BrowserRouter>
    </ThemeProvider>

    </>
  );
}

export default App;
