import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import SplideSlider from './components/Home/SplideSlider/SplideSlider'
import './tailwind.css'
import { theme } from './MuiTheme'
import { ThemeProvider } from "@mui/material";
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Home/>
    {/* <SplideSlider/> */}
    </ThemeProvider>
    </>
  );
}

export default App;
