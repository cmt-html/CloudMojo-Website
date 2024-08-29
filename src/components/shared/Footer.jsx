import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer >
   
   
    <div className='footer'> 
      <div className='container'>
      <div className='row'>
       <div className='col-md-7'><h1>We would love to<br></br> hear from you!</h1></div>
      <div className=' col-md-5'><button className='button get-in-toch-button'>Get in touch<span><img src="./images/arrow-footer-button.png" /></span></button></div>
      </div>

      <div className='contacts'>
      <div className='row'>


        <div className='col-md-6'>
<p>Email</p>
<span className='emailId'>mojo@cloudmojo.tech</span>

        </div>
        <div className='col-md-6 fotter-text-right'>
        <p>Call</p>
        <span className='mobileNo'>+91 91679 97777</span>
        </div>
        </div>
      </div>


    
    </div>
    

    <div className=' footer-bg'>
      <div className='container footer-text'>
<div className='footer-text-inner'>
<h1>Don't miss a byte!</h1>
<p>Subscribe to our newsletter and receive regular updates on the newest tech trends, product launches, and industry breakthroughs.</p>
<div className='search-box'><input className='inputStyle' type='text' placeholder='Email Address'></input><span className='searchIcon'><img src='./images/search-ion.png' /></span></div>
</div>





      </div>

      <div className='container bottom-footer '>
        <div className='row'>
        <div className='top-to-bottom'><a href='#'><span className='top-image'><img src='./images/top-to-bottom.png' /></span><span className='top-text'>Top</span></a></div>
        </div>

<div className='container p-0'>
        <div className='row footer-social-iocn'>
       

          <div className='col-md-6'><img src="./images/CMT-Logo.png" /></div>
          <div className='col-md-6 social-icon'>
<ul>
  <li><Link href="#"><span className='whats-app'></span></Link></li>
  <li><Link href="#"><span className='twitter'></span></Link></li>
  <li><Link href="#"><span className='linkedin'></span></Link></li>
  <li><Link href="#"><span className='facebook'></span></Link></li>
  <li><Link href="#"><span className='instagram'></span></Link></li>
  <li><Link href="#"><span className='youtube'></span></Link></li>
</ul>


          </div>
          <div className='line-top'><img src="./images/line-top.png" height="2" /></div>
        </div>

        <div className='copy-right-text'>
          <div className='container '>
            <div className='row'>
              <div className='col-md-7 p-0'>
            <ul>
              <li><Link href="#">Home <span className='copyrightIcon'></span></Link></li>
              <li><Link href="#">What’s new<span className='copyrightIcon'></span></Link></li>
              <li><Link href="#">Terms & Conditions<span className='copyrightIcon'></span></Link></li>
              <li><Link href="#">Privacy Policy<span className='copyrightIcon'></span></Link></li>
                       <li><Link href="#">Leave a Review<span className='copyrightIcon'></span></Link></li>
            </ul>
            </div>
            <div className='col-md-5 copy-right'>
              <p>© 2024 CloudMojo Tech Pvt. Ltd. All rights reserved.</p>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>

  


      </div>

   
      
      
    </div>
    </footer>
  )
}

export default Footer