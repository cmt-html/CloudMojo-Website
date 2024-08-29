"use client";

import Leadership from '@/app/leadership/page';
import React, { useState } from 'react';
//import { Scrollbar } from './react-scrollbars-custom';
import Link from 'next/link';
const Header = () => {
const [activeMenu,setActive] = useState(true);

const handelarMenucolsed = () =>{
  setActive(!activeMenu)
} 

// const handelarMenu =()=>{
//     const element = document.getElementById("myDIV");
//     element.classList.toggle("mystyle");
    
// }
//   const handelarMenucolsed =()=>{
//     const element = document.getElementById("myDIV");
//     element.classList.remove("mystyle");
    
// }

  return (

<header>
  
  <div className="container">
  <div className='icon' onClick={handelarMenucolsed}><img src="./images/menu-dots.png" /></div>
 <div className="header-top">
<div className='row'>
<div className='col-md-6'>
<div className="logo">
<img src="./images/cmt-logo-cloud.png" />
</div>
</div>
</div>
</div>


</div>


<nav>



  <div className={`side-bar ${activeMenu?"":"activeMenu"}`}>
  <div className='cross-icon' ><img src="./images/cross-button.png" onClick={handelarMenucolsed} /></div>
   <div className="navbar">
    <ul className='menu-bar'>
      <li><a href='#'>Solutions </a>
        
        <ul className='d-block'>
          <li><Link href="#">Finance</Link></li>
          <li><Link href="#">Digital</Link></li>
          <li><Link href="#">Communication</Link></li>
          <li><Link href="#">AI Automation</Link></li>
          <li><Link href="#">Digital Archiving</Link></li>
          <li><Link href="#">Retail</Link></li>
        </ul>
        </li>
      <li>
        <a href='#'>Services</a>
      <ul className='d-none'>
        <li><Link href="#">IT Infrastructure</Link></li>
        <li><Link href="#">Management</Link></li>
        <li><Link href="#">Digital</Link></li>
        <li><Link href="#">Transformation</Link></li>
        <li><Link href="#">Cyber Security</Link></li>
        <li><Link href="#">Manage Cloud  </Link></li>
        <li><Link href="#">Services</Link></li>
        <li><Link href="#">QR Code Solution</Link></li>
      </ul>
      </li>
      <li><a href='#'>Resources</a></li>
      <li><a href='#'>About Us</a></li>
      <li><a href='#'>Contact</a></li>
    
    </ul>

<div className='social-icon-nav'>
    <ul>
      <li><Link href="#"><img src="./images/Facebooknav.png" /></Link></li>
      <li><Link href="#"><img src="./images/Instagramnav.png" /></Link></li>
      <li><Link href="#"><img src="./images/Youtubenav.png" /></Link></li>
    </ul>
    <ul>
      <li><Link href="#"><img src="./images/Whatsapnav.png" /></Link></li>
      <li><Link href="#"><img src="./images/twitternav.png" /></Link></li>
      <li><Link href="#"><img src="./images/Linkedinnav.png" /></Link></li>
    </ul>
    </div>


   </div>

  
  </div>
</nav>

</header>

  )
}

export default Header
