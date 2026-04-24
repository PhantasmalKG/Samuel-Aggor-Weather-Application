import React, {useState} from "react";
import Banner from "./components/banner/banner";
import Dashboard from "./components/dashboard/dashboard";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [theme, setTheme] = useState("dark");


  return (
    <div className={`weather_app ${theme === "light" ? "light_theme" : "dark_theme"}`}>
      <Banner />
      <Dashboard />
    </div>
  );
}

export default App;
