import React from 'react';

const Whatsnew = () => {
return (
  <section>
  <div className='container'>
<div className='row'>
  <div className='whatsNew'>

  <h1>Don't miss a byte!</h1>
  <p>Subscribe to our newsletter and receive regular updates on the<br /> newest tech trends, product launches, and industry<br /> breakthroughs.</p>
<div className='searchWhatsNew'><input className='inputStyle' type='text' placeholder='Email Address' /><span className='searchIcon'><img src='./images/search-ion.png' /></span></div>
</div>
</div>

</div>
<div className='container'>
  <div className='showcase'>
<ul>
<li>All</li>

<li>News</li>

<li>Blogs</li>

<li>Webinars</li>
</ul>
  </div>

  <div className='showcaseDetails'>
    <div className='row'>

      <div className='col-md-6'><img src='./images/showcaseimg.png' width="100%" />
      <img src='./images/showcaseLine.png' className='textCenterLine' />
      </div>
      <div className='col-md-6'>
<span className='dateText'>February 28, 2024 - 2 min read</span>
<p>D-JINN.AI wins the prestigious GAISA<br/> 4.0 Award for the “Best use of AI<br/> in Automation”</p>
<button className='button get-in-toch-button'>Read More<span><img src="./images/arrow-footer-button.png" /></span></button>
      </div>
    </div>


    
  </div>



</div>
<div className=' blog'>
 <div className='container'>
  <h1>News</h1>
  <div className='blogMain'>
  <div className='blogCard-1'>
  <img src="./images/blog-img.png"  className='twitter-3' />
  
  <div className='blogPara-1'>
  
    <p><span>January 05, 2024 </span> - <span>3 min read </span></p>
  
   
    <p className='text'>Lorem ipsum dolor sit<br></br> amet, consectetur<br></br> adipiscing elit... </p>
    </div>
  </div>
  <div className='blogCard-2'>
  <img src="./images/blog-img.png"  className='twitter-3'  />
  
  <div className='blogPara-2'>
  
    <p><span>January 05, 2024 </span> - <span>3 min read </span></p>
  
   
    <p className='text'>Lorem ipsum dolor sit<br></br> amet, consectetur<br></br> adipiscing elit... </p>
    </div>
  </div>
  
  </div>

  </div>

  <button className='button buttonNews'><span className='gradient'>Show all News</span><span><img src="./images/arrow-button.png" /></span></button>

  
  <div className=' webinarsTop innerTop'>
    <div className='container'>
  <h1>Blogs</h1>
  <div className='blogMain'>
  <div className='blogCard-1'>
  <img src="./images/blog-img.png"  className='twitter-3' />
  
  <div className='blogPara-1'>
  
    <p><span>January 05, 2024 </span><span>- </span> <span>3 min read </span></p>
  
   
    <p className='text'>Lorem ipsum dolor sit<br></br> amet, consectetur<br></br> adipiscing elit... </p>
    </div>
  </div>
  <div className='blogCard-2'>
  <img src="./images/blog-img.png"  className='twitter-3' />
  
  <div className='blogPara-2'>
  
    <p><span>January 05, 2024 </span> - <span>3 min read </span></p>
  
   
    <p  className='text'>Lorem ipsum dolor sit<br></br> amet, consectetur<br></br> adipiscing elit... </p>
    </div>
  </div>
  </div>
  </div>
  </div>
  <button className='button buttonblog'><span className='gradient'>Show all Blogs</span><span><img src="./images/arrow-button.png" /></span></button>

  </div>
  

 </section>

 
)}

export default Whatsnew