import React, { Component } from 'react';

class Testimonials extends Component {
   render() {

      return (
         <section id="testimonials">
            <div className="text-container">
               <div className="row">

                  <div className="two columns header-col">
                     <h1><span>Client Testimonials</span></h1>
                  </div>

                  <div className="ten columns flex-container">
                     <ul className="slides">
                 
                        <li>
                           <blockquote>
                              <p>Jason Hook</p>
                              <cite style={{fontSize: '16px'}}>That Lin Qing must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!</cite>
                           </blockquote>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Testimonials;
