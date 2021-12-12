import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <nav className="flex justify-between p-3 bg-yellow-200">
                <div className="m-2">logo</div>
                <ul className="flex m-2">
                    <li className="px-3"><Link to="/">ChartA</Link></li>
                    <li className="px-3"><Link to="/chartb">ChartB</Link></li>
                </ul>
            </nav>
        </div>
            
    )
}

export default Nav