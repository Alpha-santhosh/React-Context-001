import React, { useContext } from 'react'
import { globleData } from '../App'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';


function Content() {
    const { ThemeStatus, setThemeStatus } = useContext(globleData);
    return (
        <div className="content">
            <button
                onClick={() => {
                    setThemeStatus(preTheme => preTheme = !preTheme)
                }}>Toggle Theme to {ThemeStatus ? "Light" : "Dark"}</button>

            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Content