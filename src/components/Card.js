import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Card = props => (
  <div className="col-auto">
    <div className="portfolio-box mb-32">
      <a
        href={props.Link1}
        className="portfolio-link-project1"
      >
        <img src={props.image} alt="project1" />
      </a>
      <h6> <a
        href={props.Link1}
        target=""
        rel="noopener"
        > {props.heading}</a>
        </h6>
      <p className="portfolio-project-desc">{props.content}</p>
      <div>
        <a className="portfolio-project-asset">
          {props.Technology}
        </a>
      </div>
    </div>
  </div>
)

export default Card
