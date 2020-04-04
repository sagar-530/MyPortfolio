import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
                     <li key='github'><a href='http://github.com/actiongeek/'><i className='fa fa-github'></i></a></li>
                     <li key='linkedin'><a href='http://www.linkedin.com/in/robby-lin-1012'><i className='fa fa-linkedin'></i></a></li>
                     <li key='twitter'><a href='https://twitter.com/'><i className='fa fa-twitter'></i></a></li>
                     <li key='instagram'><a href='https://www.instagram.com/'><i className='fa fa-instagram'></i></a></li>
                     <li key='facebook'><a href='https://www.facebook.com/'><i className='fa fa-facebook'></i></a></li>
                     <li key='skype'><a href='https://web.skype.com/'><i className='fa fa-skype'></i></a></li>
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2019 Robby Lin</li>
           </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
