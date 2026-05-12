import React, {useState} from "react";
import Dashboard from "./components/dashboard/dashboard";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [theme, setTheme] = useState("dark");


  return (
    <div className={`weather_app ${theme === "light" ? "light_theme" : "dark_theme"}`}>
      <Dashboard />
    </div>
  );
}

export default App;
