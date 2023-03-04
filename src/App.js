import React, { createContext, useState } from "react";
import "./index.js";
import Content from "./Components/Content.jsx";
import Nav from "./Components/Nav.jsx";
import { Themes } from "./Themes.js";

export const globleData = createContext();

function App() {
  const [ThemeStatus, setThemeStatus] = useState(true);
  return (
    <globleData.Provider value={{ ThemeStatus, setThemeStatus }}>
      <p>I have changed theme to {ThemeStatus ? "Light" : "Dark"}</p>
      <div style={ThemeStatus ? Themes.LightTheme : Themes.DarkTheme}>
        <Nav />
        <Content />
      </div>
    </globleData.Provider>
  );
}

export default App;
