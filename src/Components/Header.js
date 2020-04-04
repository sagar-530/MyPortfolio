import React, { Component } from 'react';

class Header extends Component {
   render() {

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm Robby Lin.</h1>
                  <h3>I'm a Dalian, China based <span>Full Stack Web Developer with 6 years of experience</span>. I am a MERN Stack developer with rich knowledge and experience developing high-loaded web apps. I have solid background and can provide you not only with the technical, but also with a business solution to your projects.I can say for sure that I'm an expert in web development with frontend and backend and servers.
                   If you are in need of an expert for your IT team or if you feel that you can make the development process more effective - just contact me and I’ll become a personal supercharger for your IT works.</h3>
                  <hr />
                  <ul className="social">
                     <li key='github'><a href='http://github.com/actiongeek/'><i className='fa fa-github'></i></a></li>
                     <li key='linkedin'><a href='http://www.linkedin.com/in/robby-lin-1012'><i className='fa fa-linkedin'></i></a></li>
                     <li key='twitter'><a href='https://twitter.com/'><i className='fa fa-twitter'></i></a></li>
                     <li key='instagram'><a href='https://www.instagram.com/'><i className='fa fa-instagram'></i></a></li>
                     <li key='facebook'><a href='https://www.facebook.com/'><i className='fa fa-facebook'></i></a></li>
                     <li key='skype'><a href='https://web.skype.com/'><i className='fa fa-skype'></i></a></li>
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
