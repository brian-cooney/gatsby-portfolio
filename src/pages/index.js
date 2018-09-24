import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import "../styles/fonts.css"
import Project1 from "../content/react-search.png";
import Project2 from "../content/ec-1-gallery.png";
import Project3 from "../content/omnifood1.png";
import Project4 from "../content/pinata.png";
import Avatar from "../content/brian-avatar.png";
import Card from '../components/Card';


const IndexPage = () => (
  <Layout>
  <div className="portfolio">
        <div className="portfolio-hero">
          <img className="avatar-home" src={Avatar} alt=""/>   
          <h1 className="portfolio-hero-copy">
            Howdy, I'm currently building this site in Gatsby JS
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
              Link1=""
              Link1Titile="GitHub"
           />
           <Card 
              image={Project2} 
              heading="EC-1 Gallery"
              content="Brand management platform"
              Link1="www.asdfdsaf.adsf"
              Link1Titile="GitHub"
           />
           <Card 
              image={Project3} 
              heading="Omnifood"
              content="Restaraunt marketing site"
              Link1="www.omnifood.com"
              Link1Titile="GitHub"
           />
           
           <Card 
              image={Project4} 
              heading="Pinata"
              content="Collection of news API widgets in your feed"
              Link1=""
              Link1Titile="GitHub"
           />
            
      
                </div>              
              </div>                
  </Layout>
)

export default IndexPage
