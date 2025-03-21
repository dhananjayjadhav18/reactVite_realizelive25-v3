import React from 'react'
import ReactPlayer from 'react-player'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />


import video from "./../assets/images/video/US-video.mp4";
import infinityiconWithPattern1 from "./../assets/images/infinity-iconWithPattern-1.png";

import adamShepherd from "./../assets/images/speakers/AdamShepherd.png";
import frankHelmke from "./../assets/images/speakers/FrankHelmke.png";
import jeffMowry from "./../assets/images/speakers/JeffMowry.png";
import joeBohman from "./../assets/images/speakers/JoeBohman.png";
import silviaRodriguez from "./../assets/images/speakers/SilviaRodriguez.png"; 
import tonyHemmelgarn from "./../assets/images/speakers/TonyHemmelgarn.png";

import icons_betterUser from "./../assets/images/icons/betterUser.png";
import icons_connect from "./../assets/images/icons/connect.png";
import icons_diveEcosystem from "./../assets/images/icons/diveEcosystem.png";
import icons_quote from "./../assets/images/icons/quote.png";
import icons_stayAhead from "./../assets/images/icons/stayAhead.png";
import icons_thoughtLeaders from "./../assets/images/icons/thoughtLeaders.png";
import icons_trainingCertification from "./../assets/images/icons/trainingCertification.png";
import eventGuide from "./../assets/images/eventGuide.jpg";

import SponsorCard from "./../assets/images/blogs/Sponsor_Card_640x360.avif";
import SiemensRealizeLiveSpeakerProgram from "./../assets/images/blogs/Siemens-realize-live-speaker-program-640x360.avif";
import SiemensRealizeLiveSolutionsCenter from "./../assets/images/blogs/siemens-realize-live-solutions-center-2-640x360.avif";
import SiemensRealizeBirdBRD27313 from "./../assets/images/blogs/Siemens_Realize_May_2024_Drew_BirdBRD27313.avif";
import SessionsAgenda from "./../assets/images/blogs/Sessions_Agenda.avif";
import RLAmericasExperiences from "./../assets/images/blogs/RL_Americas_Experiences.avif";

const Home = () => {
  return (
    <>
      <header id="header-con">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-offset="0">
                <div className="superscript">The Digital Transformation Conference</div>
                <h1 className="title">Realize LIVE APAC 2025</h1>
                <p>Join our community of thinkers and doers in design, manufacturing and lifecycle management to accelerate your digital transformation.</p>
                <p>Save $400 by securing your super early bird pass by February 10.</p>
                <p className="fw-bold">
      Bengaluru, India | Aug 5-6</p>
                <p>
                  <a href="https://events.sw.siemens.com/en-US/realizelive/americas/pricing-packages-americas/" target="_blank" className="btn_BoldGreen">Register</a>
                </p> 
              </div>
            </div>
          </div>
      </header>
      <section id="packages-con" className="bg-light-gray pt-2 pb-2">
        <div className="container-fluid">
            <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="row justify-content-between">
                <div className="col-auto pt-2 pb-2"  data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="300">
                    <img src={infinityiconWithPattern1} width={80} />
                </div>
                <div className="col-lg-8 col-sm-8 pt-2 pb-2" data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="450">
                  <h2 className="mb-0">Last chance to save $400 on a super early bird pass</h2>
                  <small>Ends February 10. Unlock access to sessions, training, certification, networking opportunities and more.</small>
                </div>
                <div className="col-auto pt-2 pb-2" data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="550">
                  <a href="https://events.sw.siemens.com/en-US/realizelive/americas/pricing-packages-americas/" className="btn_BoldGreen pt-2 pb-2" target="_blank">View packages</a>
                  </div>
                </div>
            </div>	
          </div>
        </div>
      </section>

      <section id="about-con">
        <div className="container-fluid">
          <div className="row justify-content-around gx-4">
            <div className="col-lg-8 col-12" data-aos="fade-up" data-aos-duration="500" data-aos-delay="350">
              <ReactPlayer url={video} playing={true} loop={true} muted={true} controls={true} className='react-player' width='100%' height='100%'/>
            </div>
            <div className="col-lg-4 col-12" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <div className="p-5">
                <h2 className="h2 mb-4">Where your digital transformation gets real. Fast.</h2>
                <p>We're returning to Detroit with over 450+ sessions and 2,500+ experts, leaders, and partners discussing AI, digitization, sustainability and optimization across the product lifecycle. For all things digital transformation, Realize LIVE is a chance to learn, network, and connect with the Siemens software community and walk away with new tools and insights for your digital journey.</p>
                <p>Get a sneak peek of what you can expect!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="speaker-con" className="bg-blue-dark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-12 mb-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
              <h3 className="superscript">Featured</h3>
              <h2 className="h2 mb-4">Main stage speakers</h2>
              <p>Siemens, customers, executives and inspiring thought leaders come together to showcase how your digital transformation gets real. Fast.</p>
            </div>
          </div>
          <div className="row row-cols-lg-2 row-cols-1">
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
              <div className="speaker-box">
                <div className="row g-0">
                  <div className="col-lg-4 col-12 speaker-img"><img src={jeffMowry} className="img-fluid" alt=""/> </div>
                  <div className="col-lg-8 col-12 p-3">
                    <p className="superscript mb-0">Workhorse</p>
                    <h2 className="">Jeff Mowry, Workhorse Chief Information Officer</h2>
                    <p>Jeff brings over 25 years of extensive automotive industry experience in Information Technology, having held leadership positions at DaimlerChrysler, Detroit Diesel, American Axle and Lordstown Motors.</p>
                  </div>
                  </div>
              </div>	
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="550">
              <div className="speaker-box">
                <div className="row g-0">
                  <div className="col-lg-4 col-12 speaker-img">
                    <img src={silviaRodriguez} className="img-fluid" alt=""/>
                  </div>
                  <div className="col-lg-8 col-12 p-3">
                    <p className="superscript mb-0">CHANEL</p>
                    <h2 className="">Silvia Rodriguez, PLM Fragrance and Beauty Lead</h2>
                    <p>Silvia brings 16 years of experience in Product Lifecycle Management (PLM), with a background spanning industries such as aeronautics and consumer goods.</p>
                  </div>
                  </div>
              </div>	
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
              <div className="speaker-box">
                <div className="row g-0">
                  <div className="col-lg-4 col-12 speaker-img">
                  <img src={frankHelmke} className="img-fluid" alt=""/>
                  </div>
                  <div className="col-lg-8 col-12 p-3">
                    <p className="superscript mb-0">BSH Home Appliances Group</p>
                    <h2 className="">Frank Helmke, Head of Product Lifecycle Management</h2>
                    <p>Frank Helme is in charge of PLM at BSH and supports the entire Product Development processes globally with his teams, based in Germany, Poland, India and China.</p>
                  </div>
                  </div>
              </div>	
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="550">
              <div className="speaker-box">
                <div className="row g-0">
                  <div className="col-lg-4 col-12 speaker-img">
                    <img src={adamShepherd} className="img-fluid" alt=""/>
                  </div>
                  <div className="col-lg-8 col-12 p-3">
                    <p className="superscript mb-0">Northrop Grumman</p>
                    <h2 className="">Adam Shepherd, Fellow for Digital Transformation</h2>
                    <p>Adam is responsible for the company's engineering digital transformation initiatives within its aeronautics business, leading implementation of digital transformation initiatives within the aeronautics portfolio.</p>
                  </div>
                  </div>
              </div>	
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
              <div className="speaker-box">
                <div className="row g-0">
                  <div className="col-lg-4 col-12 speaker-img">
                  <img src={tonyHemmelgarn} className="img-fluid" alt=""/></div>
                  <div className="col-lg-8 col-12 p-3">
                    <p className="superscript mb-0">Siemens Digital Industries Software</p>
                    <h2 className="">Tony Hemmelgarn, President and CEO</h2>
                    <p>Tony Hemmelgarn is president and CEO of Siemens Digital Industries Software. Prior to this appointment, he served as the company's executive vice president of Global Sales, Marketing and Services.</p>
                  </div>
                  </div>
              </div>	
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="550">
              <div className="speaker-box">
                <div className="row g-0">
                  <div className="col-lg-4 col-12 speaker-img">
                  <img src={joeBohman} className="img-fluid" alt=""/></div>
                  <div className="col-lg-8 col-12 p-3">
                    <p className="superscript mb-0">Siemens Digital Industries Software</p>
                    <h2 className="">Joe Bohman, Executive Vice President, PLM Products</h2>
                    <p>Joe and his team are responsible for setting the long-term strategy of the PLM product portfolio, helping to balance and align long-term thinking, prioritization and investments with short-term focus and execution.</p>
                  </div>
                  </div>
              </div>	
            </div>
          </div>
        </div>
	    </section>

      <section id="whyAttend-con">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-12 mb-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
              <h3 className="superscript">Why you should attend</h3>
              <h2 className="h2 mb-4">Accelerate your digital transformation journey</h2>
              <p>Learn from experts and industry leaders, build your skills and discover the latest trends and technology with more than 400+ sessions.</p>
            </div>
          </div>
          <div className="row row-cols-lg-3 row-cols-1 g-5">
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="350">
              <div className="why-pointer-box">
                <div className="icon"><img src={icons_betterUser} width={55} alt=""/></div>
                <div className="title">Become a better user</div>
                <div className="text">
                  <p>Leave empowered! 85% of attendees leave with new skills and enhanced tool proficiency. </p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <div className="why-pointer-box">
                <div className="icon"><img src={icons_thoughtLeaders} width={55} alt=""/></div>
                <div className="title">Get inspired by thought leaders</div>
                <div className="text">
                  <p>Over 70% of sessions are led by customers, sharing real-world insights and innovations. </p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="650">
              <div className="why-pointer-box">
                <div className="icon"><img src={icons_stayAhead} width={55} alt=""/></div>
                <div className="title">Stay ahead with product roadmaps</div>
                <div className="text">
                  <p>Stay up-to-date with exclusive product presentations showcasing the latest advancements in Siemens technology and preview upcoming updates to plan for what's next. </p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="350">
              <div className="why-pointer-box">
                <div className="icon"><img src={icons_trainingCertification} width={55} alt=""/></div>
                <div className="title">Gain exclusive hands-on training & certification</div>
                <div className="text">
                  <p>Get complimentary hands-on training, 60 days access to Siemens Xcelerator Academy and 20 lab hours. Plus, earn your Siemens Xcelerator Certification ($1150 value).</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <div className="why-pointer-box">
                <div className="icon"><img src={icons_connect} width={55} alt=""/></div>
                <div className="title">Connect and celebrate with product experts</div>
                <div className="text">
                  <p>Join dedicated portfolio meet-ups, industry receptions and our Community Corner to connect with peers who are on their digital transformation journey. Don't forget the celebration-an experience not to be missed!</p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="650">
              <div className="why-pointer-box">
                <div className="icon"><img src={icons_diveEcosystem} width={55} alt=""/></div>
                <div className="title">Dive into the Siemens ecosystem</div>
                <div className="text">
                  <p>Your destination for all things digital transformation. Meet experts, engage with partners and experience live demos in the solutions center.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-dark mt-5"  data-aos="fade-up" data-aos-duration="900" data-aos-delay="650">
            <div className="row align-content-center justify-content-around">
              <div className="col-auto">
                <img src={eventGuide} alt="" width={300} className="img-fluid"/>
              </div>
              <div className="col-auto align-content-center mb-4 mt-4 p-4">
                <h2>Event guide</h2>
                <p className="mb-0">All details on Realize LIVE Americas - tracks, industries, core topics and sessions.</p>
              </div>
              <div className="col-auto align-content-center">
                <a href="https://downloads.ctfassets.net/17si5cpawjzf/BJO43RdbF9PXfDGhnfJb8/362a124ca1fd9310049fd8a46ee80870/RL25_AMS_Event_Guide_FINAL__2_.pdf" target="_blank" className="btn_BoldGreen mb-3 mt-3">Download guide</a>
              </div>
            </div>
          </div>
        </div>	
      </section>

      <section id="testimonials" className="bg-blue-dark">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12"  data-aos="fade-up" data-aos-duration="750" data-aos-delay="400">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
             
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className="blockquote">
									<img src={icons_quote} width="33" className="mb-3" />
									<h3>From the CEO to the maintenance crew, having accurate data helps everyone make better decisions to improve operations. Collaboration between operations, engineering, management and quality teams is key to success. [At Realize LIVE] your team can make smarter, faster business decisions, driving real improvements across your environment.</h3>
									<p>Dan Engelhard, Realize LIVE Americas 2024 attendee</p>
								</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blockquote">
                    <img src={icons_quote} width="33" className="mb-3" />
                    <h3>The insights you gain here can directly spark innovation within your organization. It's not just about learning new topics and technologies, but also about bringing those ideas back to your team to drive internal change.</h3>
                    <p>Shiv Tailor, Realize LIVE Europe 2024 attendee</p>
                  </div>
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section id="blogs-con">
        <div className="container-fluid">
          <div className="row row-cols-lg-3 row-cols-1 row-cols-md-2 gx-4">
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="350">
              <div className="blogs-box">
                <div className="img">
                  <img src={SiemensRealizeLiveSpeakerProgram}  className="img-fluid" alt=""/></div>
                <div className="title">On-demand content</div>
                <div className="text">Views sessions from 2024. Learn about the latest technical innovations, tips and use cases with insights from our customers, partners and Siemens experts.</div>
                <div className="link">
                  <a href="https://content.sw.siemens.com/2024/" target="_blank">
                    View on-demand content 
                  </a><i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <div className="blogs-box">
                <div className="img"><img src={SponsorCard}  className="img-fluid" alt=""/></div>
                <div className="title">Become a sponsor</div>
                <div className="text">Connect with industry leaders, showcase your solutions to thousands of engaged attendees and be part of conversations with users and leaders.</div>
                <div className="link">
                  <a href="https://events.sw.siemens.com/en-US/realizelive/become-a-sponsor/" target="_blank">
                    Request prospectus
                  </a><i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
              <div className="blogs-box">
                <div className="img"><img src={SiemensRealizeLiveSolutionsCenter} className="img-fluid" alt=""/></div>
                <div className="title">Solutions Center</div>
                <div className="text">The Solutions Center is your digital transformation destination. Meet experts; engage with partners; and experience live demos at Realize LIVE Americas.</div>
                <div className="link">
                  <a href="https://events.sw.siemens.com/en-US/realizelive/americas/solutions-center/" target="_blank">
                    Explore the Solutions Center
                  </a><i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="350">
              <div className="blogs-box">
                <div className="img"><img src={SessionsAgenda} className="img-fluid" alt=""/></div>
                <div className="title">Sessions</div>
                <div className="text">Explore a diverse range of sessions from visionary keynotes and industry panels to in-depth technical tracks, hands-on training and interactive demos. All designed to expand your knowledge and grow your skill set.</div>
                <div className="link">
                  <a href="https://events.sw.siemens.com/en-US/realizelive/americas/session-catalog-americas/" target="_blank">
                    Dive into sessions
                  </a><i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <div className="blogs-box">
                <div className="img"><img src={SiemensRealizeBirdBRD27313} className="img-fluid" alt=""/></div>
                <div className="title">Training and certification</div>
                <div className="text">Enhance your Siemens software skills and knowledge with Siemens Xcelerator Academy. Unlock the power of Siemens' digital transformation solutions through hands-on training and expert-led sessions.</div>
                <div className="link">
                  <a href="https://events.sw.siemens.com/en-US/realizelive/americas/xcelerator-academy/" target="_blank">
                    Explore Siemens Xcelerator Academy
                  </a><i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
              <div className="blogs-box">
                <div className="img"><img src={RLAmericasExperiences} className="img-fluid" alt=""/></div>
                <div className="title">Event guide</div>
                <div className="text">All details on Realize LIVE Americas - tracks, industries, core topics and sessions.</div>
                <div className="link">
                  <a href="https://downloads.ctfassets.net/17si5cpawjzf/BJO43RdbF9PXfDGhnfJb8/362a124ca1fd9310049fd8a46ee80870/RL25_AMS_Event_Guide_FINAL__2_.pdf" target="_blank">
                    Download guide
                  </a><i className="bx bx-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-dark mt-5"  data-aos="fade-up" data-aos-duration="400" data-aos-delay="550">
            <div className="row align-content-center justify-content-between">
              <div className="col-auto align-content-center">
                <h2>Register now</h2>
                <p className="mb-0">The digital transformation event: be informed, inspired and excited.</p>
              </div>
              <div className="col-auto align-content-center">
                <a href="https://events.sw.siemens.com/en-US/realizelive/americas/pricing-packages-americas/" target="_blank" className="btn_BoldGreen mt-3 mb-3">Register now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>




export default Home
