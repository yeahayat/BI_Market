import React from 'react'
import Card from './Card'

const data = [
  { image: '/images/1.png', title: 'Квартира 1', area: 75, price: 45 },
  { image: '/images/2.png', title: 'Квартира 2', area: 60, price: 35 },
  { image: '/images/3.png', title: 'Квартира 3', area: 90, price: 55 },
  { image: '/images/4.png', title: 'Квартира 4', area: 92, price: 70 },
  { image: '/images/5.png', title: 'Квартира 5', area: 75, price: 45 },
  { image: '/images/6.png', title: 'Квартира 6', area: 60, price: 35 }
]

const Results = () => {
  return (
    <section className="results">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </section>
  )
}

export default Results
