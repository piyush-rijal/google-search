import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="min-h-screen dark:bg-primary">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Footer />
         
        </div>
      </div>
    </>
  );
}

export default App;
