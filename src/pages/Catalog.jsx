import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Results from '../components/Results'
import '../index.css'

const Catalog = () => {
  return (
    <>
      <Header />
      <main className="container main-content">
        <Sidebar />
        <Results />
      </main>
      <Footer />
    </>
  )
}

export default Catalog
