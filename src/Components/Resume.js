import React, { Component } from 'react';

class Resume extends Component {
  render() {

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">

                <div key={'Dalian University of Technology'}><h3>Dalian University of Technology</h3>
                  <p className="info">Bachelor's degree in Computer Software Engineering<span>&bull;</span><em className="date">April 2014 - Dec 2017</em></p>
                </div>

                <div key={'Dalian University of Foreign Languages'}><h3>Dalian University of Foreign Languages</h3>
                  <p className="info">Bachelor's degree in General Studies<span>&bull;</span><em className="date">April 2012 - Oct 2014</em></p>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work History</span></h1>
          </div>

          <div className="nine columns main-col">

            <div key={'HiSoft'}><h3>HiSoft</h3>
              <p className="info">Full Stack Web Developer(Remote)<span>&bull;</span> <em className="date"> Oct 2019 - Present </em></p>
              <p>I am responsible for developing and designing from front-end web architecture, ensuring the responsiveness of applications and working alongside graphic designers for web design features. I am often required to see out a project from conception to final project, requiring good organizational skills and attention to detail.
                 I am working with following things here:<br />
                - Developing front end website architecture.<br />
                - Designing user interactions on web pages.<br />
                - Developing back end website applications.<br />
                - Creating servers and databases for functionality.<br />
                - Ensuring cross-platform optimization for mobile phones.<br />
                - Ensuring responsiveness of applications.<br />
                - Working alongside graphic designers for web design features.<br />
                - Seeing through a project from conception to finished product.<br />
                - Designing and developing APIs.<br />
                - Meeting both technical and consumer needs.<br />
                - Staying abreast of developments in web applications and programming languages.</p>
            </div>


            <div key={'Dalian Wanda Group'}><h3>Dalian Wanda Group</h3>
              <p className="info">Senior Software Engineer<span>&bull;</span> <em className="date"> Sep 2017 - Sep 2019 </em></p>
              <p>Working with IT team, my major role was to lead the development team in order to complete customer’s orders. It involved orders from small web product customization to big engineering jobs. I have used MERN stack and deployed almost of my products to AWS. They were all supported under serverless architecture by using Amazon Lambda Functions based on NodeJS</p>
            </div>

            <div key={'Neusoft'}><h3>Neusoft</h3>
              <p className="info">Senior Web Application Developer<span>&bull;</span> <em className="date"> Sep 2017 - Sep 2019 </em></p>
              <p>In this company, I have worked as part time job as an Web Application Developer in its IT team. My major job was to build marketing sites and mange the full performance of site.
                What I did here:<br/>
                - Updated existing websites to resolve errors and adapt it to new performance requirements.<br/>
                - Outlined specifications and performance requirements and worked with the quality assurance team to
                  fully test all variables.<br/>
                - Collected and defined proof of concepts and scope of works for future plan of some platforms and
                  tried to create successful system meeting the unique needs of each client</p>
            </div>

            <div key={'Dalian Software Park Co.,Ltd. Shanghai Office'}><h3>Dalian Software Park Co.,Ltd. Shanghai Office</h3>
              <p className="info">Individual Contributor<span>&bull;</span> <em className="date"> Jan 2014 - May 2016 </em></p>
              <p>All career here was flown with my campus period.
                  Detailed content what I have done here:<br/>
                - Delivered additional functionalities of website each day, including processing all of the frontend, 
                  backend and database administration.<br/>
                - Reviewed code quality and style, SEO for specification terms.<br/>
                - Consulted with customers through marketing site and collected feedback for improving the quality of website.<br/>
                - Deployed applications onto AWS.</p>
            </div>

            <div key={'UP Creative, Inc.'}><h3>UP Creative, Inc.</h3>
              <p className="info">Frontend Web Developer(Remote)<span>&bull;</span> <em className="date"> Sep 2014 - May 2015 </em></p>
              <p>Started remote developer job when I was campus junior. Terrific and rich experience for freelancing I got here. Mainly focused on frontend developement using various JavaScript frameworks.</p>
            </div>


          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>Here is my skills list.
            </p>

            <div className="bars">
              <ul className="skills">
                <li key={'heroku'}><span style={{ width: '100%' }} className='bar-expand'></span><em>JavaScript</em></li>
                <li key={'heroku'}><span style={{ width: '90%' }} className='bar-expand'></span><em>React/Redux</em></li>
                <li key={'heroku'}><span style={{ width: '75%' }} className='bar-expand'></span><em>React Native</em></li>
                <li key={'heroku'}><span style={{ width: '80%' }} className='bar-expand'></span><em>NodeJS</em></li>
                <li key={'heroku'}><span style={{ width: '80%' }} className='bar-expand'></span><em>ExpressJS</em></li>
                <li key={'heroku'}><span style={{ width: '69%' }} className='bar-expand'></span><em>Meteor</em></li>
                <li key={'heroku'}><span style={{ width: '80%' }} className='bar-expand'></span><em>Gatsby</em></li>
                <li key={'heroku'}><span style={{ width: '80%' }} className='bar-expand'></span><em>NextJS</em></li>
                <li key={'heroku'}><span style={{ width: '56%' }} className='bar-expand'></span><em>VueJS</em></li>
                <li key={'heroku'}><span style={{ width: '90%' }} className='bar-expand'></span><em>Git</em></li>
                <li key={'heroku'}><span style={{ width: '85%' }} className='bar-expand'></span><em>MongoDB</em></li>
                <li key={'heroku'}><span style={{ width: '90%' }} className='bar-expand'></span><em>MySQL</em></li>
                <li key={'heroku'}><span style={{ width: '90%' }} className='bar-expand'></span><em>PostgreSQL</em></li>
                <li key={'heroku'}><span style={{ width: '87%' }} className='bar-expand'></span><em>GraphQL</em></li>
                <li key={'heroku'}><span style={{ width: '70%' }} className='bar-expand'></span><em>Amazon Web Service</em></li>
                <li key={'heroku'}><span style={{ width: '54%' }} className='bar-expand'></span><em>Firebase</em></li>
                <li key={'heroku'}><span style={{ width: '50%' }} className='bar-expand'></span><em>WebGL</em></li>
                <li key={'heroku'}><span style={{ width: '80%' }} className='bar-expand'></span><em>Data Visualization</em></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
