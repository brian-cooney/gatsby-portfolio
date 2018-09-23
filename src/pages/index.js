import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import "../styles/fonts.css"

const IndexPage = () => (
  <Layout>
  <div className="portfolio">
        <div className="portfolio-hero">
          <h1 className="portfolio-hero-copy">
            Howdy 
          </h1>        
          <p className="mb-60">
            Full stack JavaScript developer currently <br />
            obsessed with React, GraphQL, GatsbyJS
          </p>
          <Link to="/contact" className="btn-primary mb-160">
            Contact me                                     
          </Link>
        </div>        
          <div className="row row-center">
            <div className="col-auto">
              <div className="portfolio-box mb-32">
                <a href="https://ivostork.github.io/website-biorezonance/" target="" rel="noopener" className="portfolio-link-project1">
                  <img alt="project1" />
                                 
                </a>
                <p className="portfolio-project-desc">
                  Web for a friend
                </p>
                <h6>                  
                  bezzavislosti.cz
                </h6>
                <div>
                  <a href="https://sketch.cloud/s/711wZ" target="" rel="noopener" className="portfolio-project-asset">
                    Sketch artboards
                  </a>
                 </div>
                 <div>
                  <a href="https://github.com/ivostork/biorezonance" target="" rel="noopener" className="portfolio-project-asset">
                    PUG,SCSS
                  </a>
                  </div>
                </div>                
              </div>
            
            <div className="col-auto">
            <div className="portfolio-box">
                <a href="https://ivostork.github.io/web-portfolio-project/app.html#/" target="" rel="noopener" className="portfolio-link-project2">
                  <img alt="project2" />
                                
                </a>
                <p className="portfolio-project-desc">
                  Dummy web application for clients demo
                </p>
                <h6>                  
                  Crofts Accountants
                </h6>
                <div>
                  <a href="https://sketch.cloud/s/zKbmW" target="" rel="noopener" className="portfolio-project-asset">
                    Sketch artboards
                  </a>
                  </div>
                  <div>
                  <a className="portfolio-project-asset" href="https://ivostork.github.io/web-portfolio-project/styleguide.html#/colors" target="" rel="noopener">
                    Styleguide
                  </a>
                  </div>
                  <a className="portfolio-project-asset" href="https://github.com/ivostork/code-portfolio-project" target="" rel="noopener">
                    React, SCSS
                  </a>
                  </div>
                </div>  
                </div>              
              </div>                
  </Layout>
)

export default IndexPage
