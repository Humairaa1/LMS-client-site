import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div>
       <Helmet>
        <title>Library | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
    </div>
  )
}
