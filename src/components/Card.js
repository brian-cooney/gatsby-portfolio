import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'




const Card = (props) => (
    <div className="col-auto">
              <div className="portfolio-box mb-32">
                <a href="" target="" rel="noopener" className="portfolio-link-project1">
                  <img src={props.image}alt="project1" />      
                </a>
                <h6>                  
                  {props.heading}
                </h6>
                <p className="portfolio-project-desc">
                  {props.content}
                </p>
                <div>
                  <a href={props.link1} target="" rel="noopener" className="portfolio-project-asset">
                    {props.link1Titile}
                  </a>
                 </div>
                </div>                
              </div>
)

export default Card
