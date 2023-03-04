import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav">
            <p>Geekster</p>
            <Link to="/home">Home</Link> <br />
            <Link to="/contact">Contact</Link> <br />
            <Link to="/about">Service</Link> <br />
            <br />
        </div>
    )
}

export default Nav