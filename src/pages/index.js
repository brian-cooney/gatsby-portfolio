import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import '../styles/fonts.css'
import Project1 from '../content/react-search.png'
import Project2 from '../content/ec-1-gallery.png'
import Project3 from '../content/omnifood1.png'
import Project4 from '../content/pinata.png'
import Avatar from '../content/brian-avatar.png'
import Card from '../components/Card'

const IndexPage = () => (
  <Layout>
    <div className="portfolio">
      <div className="portfolio-hero">
        <img className="avatar-home" src={Avatar} alt="" />
        <h1 className="portfolio-hero-copy">
          Howdy, I'm currently building this site with Gatsby JS
        </h1>
        <h3 className="mb-60" style={{fontWeight: 500}}>
          Full stack JavaScript developer currently <br />
          obsessed with React, GraphQl & GatsbyJS
        </h3>
      </div>
      <div className="row row-center">
        <Card
          image={Project1}
          heading="Brandworkz"
          content="SAAS Brand management platform"
          Link1="https://www.brandworkz.com/"
          Link1Titile="GitHub"
          Technology="#React #Jest #Bootstrap #Java API"
        />
        <Card
          image={Project2}
          heading="EC-1 Gallery"
          content="Contemporary gallery concept"
          Link1="https://brian-cooney.github.io/EC1/"
          Link1Titile="GitHub"
          Technology="#HTML5 #Bulma #jQuery"
        />
        <Card
          image={Project4}
          heading="Pinata"
          content="Collection of news API widgets"
          Link1="https://pinata-api-feed.herokuapp.com/"
          Link1Titile="GitHub"
          Technology="#AngularJS #Node #Express #Tachyons CSS"
        />

        <Card
          image={Project3}
          heading="Omnifood"
          content="Restaraunt marketing site"
          Link1="https://brian-cooney.github.io/omnifood-website"
          Link1Titile="GitHub"
          Technology="#HTML5 #CSS"
        />

      </div>
    </div>
  </Layout>
)

export default IndexPage
