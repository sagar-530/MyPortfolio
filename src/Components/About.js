import React, { Component } from 'react';
import Myimage from './image/myimage.jpg';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={Myimage} alt="robby pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>This passionate Web development wizard loves coding so much - have delivered several valued products and maintained so far. Focuse on remote works with abroad clients - always being royal to customer's advise and requirements, brave to studying on challenging things, so rapid in producing high quality websites.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Lin Qing</span><br />
						   <span>Haijingyuan 2<br />
						         Dalian, Liaoning, 116001
                   </span><br />
						   <span>+86 134 7876 5713</span><br />
                     <span>d1k.chesho.god@gmail.com</span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
