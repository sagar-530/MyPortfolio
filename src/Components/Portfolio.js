import React, { Component } from 'react';
import image1 from './image/scout.png';
import image2 from './image/ucare.png';
import image3 from './image/transfer.png';
import image4 from './image/infosweep.png';
import image5 from './image/toy.png';
import image6 from './image/snapask.png';
import image7 from './image/sitter.png';
import image8 from './image/gun.png';
import image9 from './image/changeplan.png';

class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

              <a href='https://scoutandcellar.com/'>
                <div key='ecommerce' className="columns portfolio-item">
                  <div className="item-wrap">
                    <img alt='scoutimage' src={image1} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Ecommerce Website</h5>
                        <p>React/Redux, Gatsby, GraphQL</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </div>
                </div>
              </a>
              
              <a href='https://ucarehq.com/'>
                <div key='ecommerce' className="columns portfolio-item">
                  <div className="item-wrap">
                    <img alt='scoutimage' src={image2} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Project Management Application</h5>
                        <p>React Hooks, GraphQL, MarkDown</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </div>
                </div>
              </a>

              <a href='https://www.transfervans.co.nz/'>
                <div key='ecommerce' className="columns portfolio-item">
                  <div className="item-wrap">
                    <img alt='scoutimage' src={image3} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Booking Website</h5>
                        <p>React/Redux, NodeJS, MongoDB</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </div>
                </div>
              </a>

              <a href='https://www.elctoys.com/'>
                <div key='ecommerce' className="columns portfolio-item">
                  <div className="item-wrap">
                    <img alt='scoutimage' src={image5} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Toy Company Ecommerce Site</h5>
                        <p>React, Ngnix, Webpack</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </div>
                </div>
              </a>

              <a href='https://snapask.com/'>
                <div key='ecommerce' className="columns portfolio-item">
                  <div className="item-wrap">
                    <img alt='scoutimage' src={image6} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Learning Platfrom</h5>
                        <p>React/Redux, NodeJS, Ngnix</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </div>
                </div>
              </a>

              <a href='https://www.madpaws.com.au/'>
                <div key='ecommerce' className="columns portfolio-item">
                  <div className="item-wrap">
                    <img alt='scoutimage' src={image7} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Marketing Platform</h5>
                        <p>React, NodeJS, Google Map API</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </div>
                </div>
              </a>

              <a href='http://goat2.invision3d.org/'>
                <div key='ecommerce' className="columns portfolio-item">
                  <div className="item-wrap">
                    <img alt='scoutimage' src={image8} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>3D Customizer</h5>
                        <p>AngularJS, WebGL</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </div>
                </div>
              </a>

              <a href='https://changeplan.herokuapp.com/'>
                <div key='ecommerce' className="columns portfolio-item">
                  <div className="item-wrap">
                    <img alt='scoutimage' src={image9} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Business SAAS application</h5>
                        <p>React, Meteor, GanttChart, MongoDB</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </div>
                </div>
              </a>

              <a href='https://www.infosweep.com/'>
                <div key='ecommerce' className="columns portfolio-item">
                  <div className="item-wrap">
                    <img alt='scoutimage' src={image4} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Company Website</h5>
                        <p>Ngnix, PHP, MySQL</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
