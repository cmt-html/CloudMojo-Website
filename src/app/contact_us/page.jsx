'use client';

import React from 'react';
import Link from 'next/link';


const Whatsnew = () => {


const handelarMenu =()=>{
    document.getElementById("formInner0").style.display = "block"; 
    document.getElementById("formInner1").style.display = "none"; 
    document.getElementById("formInner2").style.display ="none";
    document.querySelector(".buttonEmpty0").classList.add("activeform");
    document.querySelector(".buttonEmpty1").classList.remove("activeform");
    document.querySelector(".buttonEmpty2").classList.remove("activeform");
     

  }
  const handelarMenuPartner =() =>{
   document.getElementById("formInner0").style.display = "none";
   document.getElementById("formInner1").style.display = "block"; 
   document.getElementById("formInner2").style.display ="none";
   document.querySelector(".buttonEmpty1").classList.add("activeform");
   document.querySelector(".buttonEmpty2").classList.remove("activeform");
    document.querySelector(".buttonEmpty0").classList.remove("activeform");

  } 
    const handelarMenuCareer =() =>{
    document.getElementById("formInner0").style.display = "none"; 
    document.getElementById("formInner1").style.display = "none"; 
    document.getElementById("formInner2").style.display ="block";
    document.querySelector(".buttonEmpty2").classList.add("activeform");
    document.querySelector(".buttonEmpty0").classList.remove("activeform");
    document.querySelector(".buttonEmpty1").classList.remove("activeform");
  }  
 



return (
 <section>
<div className='container'>
<div className='welcomeText'>
  <div className='row '>
  
    <div className='col-md-6'> <h1>Welcome to <br/>
    CloudMojo,</h1></div>

    <div className='col-md-6 welcomeParaText'>
    <div class="line-border"></div>
<p>where technology meets innovation! Whether you're interested in exploring our cutting-edge products, joining us as a partner, or becoming a part of our dynamic team, we're thrilled to hear from you. Please select the appropriate form below and let the journey begin!</p>
</div>
    </div>
 
</div>


<div className='contactForm'>
<div className='selectContactfield'>
 <button  onClick={handelarMenu} className='activeform buttonEmpty0'>Contact</button>
 <button onClick={handelarMenuPartner} className='buttonEmpty1'>Partner</button>
 <button onClick={handelarMenuCareer}  className='buttonEmpty2'>Career</button>
 
  </div>
  <div className='formInner' id='formInner0'>
<div className='selectContactForm'>
  <h1>Product Inquiry</h1>
  <p>Excited to get hands-on with our products? Brilliant choice! Fill<br /> out the form below, and we'll make sure you get a front-row seat<br /> to witness the magic.</p>
  </div>
 




<div className='form ' >

<form>
<div className='inputInline'>
  <div className='inputGroup'>
<input type='text' className='inputStyle' placeholder='Your Name*' />
  </div>
  <div className='inputGroup'>
<input type='text' className='inputStyle'  placeholder='Your E-mail*' />
  </div>
  <div className='inputGroup'>
<input type='text' className='inputStyle' placeholder='Your Phone Number*' />
  </div>
  </div>

  <div className='inputBottom'>
  <select class=" selectBox" aria-label="Default select example">
  <option selected>-Select product are you interested in-</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  <div className='inputGroup'>
<input type='text' className='inputStyle' placeholder='Tell us why you re eager to explore our products' />
  </div>

  <div className='attach'></div>
</div>
   
</form>
</div>


<div className='terms'>  <img src="./images/able.png"  className='twitter-3' /><span className='text'>I allow collecting, processing, using and storing my personal data for the purpose and agree to the <Link href='#'>privacy Policy </Link> </span></div>
<button class="get-in-toch-button   ">Get in touch<span className='rightButton'><img src="./images/arrow-footer-button.png" /></span></button>

</div>

<div className='formInner' id='formInner1'>
<div className='selectContactForm'>
  <h1>Partner With Us</h1>
  <p>Partnerships are like dance-offs; the right moves create harmony.<br /> Ready to dance with us? Share your details, and let's build<br /> something amazing together.</p>
  </div>
 




<div className='form ' >

<form>
<div className='inputInline'>
  <div className='inputGroup'>
<input type='text' className='inputStyle' placeholder='Your Name*' />
  </div>
  <div className='inputGroup'>
<input type='text' className='inputStyle'  placeholder='Your E-mail*' />
  </div>
  <div className='inputGroup'>
<input type='text' className='inputStyle' placeholder='Your Phone Number*' />
  </div>
  </div>

  <div className='inputBottom'>
 
<div className='inputGroup'>
<input type='text' className='inputStyle' placeholder='Tell us what makes your partnership proposal stand out' />
  </div>
  <div className='inputGroup'>
<input type='text' className='inputStyle' placeholder='Tell us why you re eager to explore our products' />
  </div>
</div>
   
</form>
</div>


<div className='terms'>  <img src="./images/able.png"  className='twitter-3' /><span className='text'>I allow collecting, processing, using and storing my personal data for the purpose and agree to the <Link href='#'>privacy Policy </Link> </span></div>
<button class="get-in-toch-button   ">Get in touch<span className='rightButton'><img src="./images/arrow-footer-button.png" /></span></button>

</div>

<div className='formInner' id='formInner2'>
  
<div className='selectContactForm'>
  <h1>Join Our Team</h1>
  <p>The secret sauce behind our success? Our incredible team! If <br />you're ready to bring your talents to the table, complete the form<br /> below and let's create the future together.</p>
  </div>
 




<div className='form ' >

<form>
<div className='inputInline'>
  <div className='inputGroup'>
<input type='text' className='inputStyle' placeholder='Your Name*' />
  </div>
  <div className='inputGroup'>  
<input type='text' className='inputStyle'  placeholder='Your E-mail*' />
  </div>
  <div className='inputGroup'>
<input type='text' className='inputStyle' placeholder='Your Phone Number*' />
  </div>
  </div>

  <div className='inputBottom'>
  <select class=" selectBox" aria-label="Default select example">
  <option selected>-Select Position are you interested in-</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  <div className='inputGroup'>
<input type='text' className='inputStyle' placeholder='Tell us why you’re a perfect fit' />
  </div>
</div>
   
</form>
</div>


<div className='terms'>  <img src="./images/able.png"  className='twitter-3' /><span className='text'>I allow collecting, processing, using and storing my personal data for the purpose and agree to the <Link href='#'>privacy Policy </Link> </span></div>
<button class="get-in-toch-button   ">Get in touch<span className='rightButton'><img src="./images/arrow-footer-button.png" /></span></button>

</div>
</div>




</div>
 </section>

 
)}

export default Whatsnew