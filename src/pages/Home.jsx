import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Добро пожаловать в ЖК</h1>
        <p>Современные квартиры в Астане</p>
        <button className="btn" onClick={() => navigate('/catalog')}>
          Каталог
        </button>
      </div>
    </section>
  )
}

export default Home
