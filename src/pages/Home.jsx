import React from 'react'
import Crousels  from '../components/Crousels'
import WhoAreWeCard from '../components/WhoAreWeCard'
import FacebookEmbed from '../components/FacebookPageEmbeded'

const Home = () => {
  return (
      <>
      <Crousels />
      <WhoAreWeCard />
      <FacebookEmbed pageUrl="https://www.facebook.com/alfalahmedicaltourism" />
      
      </>
  )
}

export default Home