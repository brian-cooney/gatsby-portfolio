import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import "../styles/fonts.css"
import Project1 from "../content/react-search.png";
import Project2 from "../content/ec-1-gallery.png";
import Avatar from "../content/brian-avatar.png";
import Card from '../components/Card';


const IndexPage = () => (
  <Layout>
  <div className="portfolio">
        <div className="portfolio-hero">
          <img className="avatar-home" src={Avatar} alt=""/>   
          <h1 className="portfolio-hero-copy">
            Howdy 
          </h1>     
          <p className="mb-60">
            Full stack JavaScript developer currently <br />
            obsessed with React, GraphQL, GatsbyJS
          </p>
        
        </div>        
          <div className="row row-center">
           <Card 
              image={Project1} 
              heading="Brandworz"
              content="Brand management platform"
              Link1="www.asdfdsaf.adsf"
              Link1Titile="GitHub"
           />
           <Card 
              image={Project1} 
              heading="Brandworz"
              content="Brand management platform"
              Link1="www.asdfdsaf.adsf"
              Link1Titile="GitHub"
           />
           <Card 
              image={Project1} 
              heading="Brandworz"
              content="Brand management platform"
              Link1="www.asdfdsaf.adsf"
              Link1Titile="GitHub"
           />
           
           <Card 
              image={Project2} 
              heading="EC-1 Gallery"
              content="Contemporary Art Gallery"
              Link1="www.asdfdsaf.adsf"
              Link1Titile="GitHub"
           />
            
      
                </div>              
              </div>                
  </Layout>
)

export default IndexPage
