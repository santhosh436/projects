import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to={ '/' }><div className="navhead">Draft<span className='navspan'>Shoppy</span></div></Link>
        <div className="navside">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><Link to={ '/shop' }><a href="#Shop">Shop</a></Link></li>
            <li><a href="#Contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="navsearch">
          <input type="text" placeholder='Search here' className='search'/>
          <button>Search</button>
        </div>
      </div>
    </div>
)}

export default Navbar
