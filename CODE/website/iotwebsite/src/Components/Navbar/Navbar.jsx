import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logowoutbg.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {

  const[sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default Navbar
