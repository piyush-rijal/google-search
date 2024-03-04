import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Results from "./components/Results";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="min-h-screen dark:bg-primary">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Results />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
