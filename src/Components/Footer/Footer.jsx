import React from 'react';
import footerImg from "../../assets/logo-xl.png"
import insta from "../../assets/instagram.png"
import facebookImg from "../../assets/facebook.png"
import twitImg from "../../assets/twitter.png"

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#244D3F] text-primary-content p-10 py-15 mt-10">
  <div className='footer footer-horizontal footer-center'>
    <aside>
    <img src={footerImg} alt="" />
    <p className="mt-3">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
    
  </aside>
  <nav>
    <p className='font-medium text-[20px] mb-2'>Social Links</p>
    <div className="grid grid-flow-col gap-4 mb-7">
      <a>
       <img src={insta} alt="" />
      </a>
      <a>
        <img src={facebookImg} alt="" />
      </a>
      <a>
        <img src={twitImg} alt="" />
      </a>
    </div>
  </nav>
  </div>
 <div className='border-t border-gray-600 text-gray-400'>
     <div className='md:flex justify-between py-4 text-center'>
    <p>© 2026 KeenKeeper. All rights reserved.</p>
    <div className='md:flex gap-3'>
        <p><a href="">Privacy Policy</a></p>
        <p><a href="">Terms of Service</a></p>
        <p><a href="">Cookies</a></p>
    </div>
  </div>
 </div>
</footer>
        </div>
    );
};

export default Footer;