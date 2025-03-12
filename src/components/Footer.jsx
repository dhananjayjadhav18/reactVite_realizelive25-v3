import React from 'react'


import siemensLogo from "./../assets/images/siemens-logo.svg";



import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-blue-dark">
        <div className="container-fluid">
          <div className="row justify-content-end pb-5">
            <div className="col-lg-6 col-12">
              <div className="logo">
                <img src={siemensLogo} height="15" />
              </div>
              <div className="SDtext">Siemens Digital Industries Software</div>
              <div className="social-links-con">
                <ul className="social-links">
                  <li><a href='https://www.facebook.com/SiemensDISoftware/' target='_blank' ><FaFacebook className='social-icon'/></a></li>
                  <li><a href='https://twitter.com/siemenssoftware' target='_blank' ><FaXTwitter className='social-icon' /></a></li>
                  <li><a href='https://www.linkedin.com/company/siemenssoftware/' target='_blank' ><FaLinkedin className='social-icon' /></a></li>
                  <li><a href='https://www.instagram.com/siemenssoftware/' target='_blank' ><FaInstagram className='social-icon' /></a></li>
                  <li><a href='https://www.youtube.com/SiemensSoftware' target='_blank' ><FaYoutube className='social-icon' /></a></li>
                
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="logo">
                <h2 className="title">Quick Links</h2>
              </div>
              <div className="">
                <ul className="quick-links">
                  <li><a href="#" target="_blank">Home</a></li>
                  <li><a href="#" target="_blank">About Event</a></li>
                  <li><a href="#" target="_blank">Speakers</a></li>
                  <li><a href="#" target="_blank">Agenda</a></li>
                  <li><a href="#" target="_blank">Pricing and packages</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="logo">
                <h2 className="title">Contact</h2>
              </div>
              <div className="">
                <ul className="quick-links">
                  <li><a href="#" target="_blank">PLM - Contact us</a></li>
                  <li><a href="#" target="_blank">EDA - Contact us</a></li>
                  <li><a href="#" target="_blank">Worldwide offices</a></li>
                  <li><a href="#" target="_blank">Support Center</a></li>
                  <li><a href="#" target="_blank">Provide feedback</a></li>
                  <li><a href="#" target="_blank">Report piracy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-100 btm-border mb-4"></div>
          <div className="row">
            <div className="col">
              <p className="text-white opacity-75">© Siemens 2025</p>
            </div>
            <div className="col ">
                <div className="legal-links">
                  <ul> 
                    <li><a href="https://www.siemens.com/global/en/general/terms-of-use.html" target="_blank">Terms of use</a></li>
                    <li><a href="https://www.sw.siemens.com/en-US/privacy-policy/" target="_blank">Privacy notice</a></li>
                    <li><a href="https://www.siemens.com/global/en/general/cookie-notice.html" target="_blank">Cookie statement</a></li>
                    <li><a href="https://sw.siemens.com/en-US/dmca" target="_blank">DMCA</a></li>
                    <li><a href="https://www.siemens.com/global/en/company/about/compliance/reporting-channels.html" target="_blank">Whistleblowing</a></li>
                  </ul>
                </div>
            
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
