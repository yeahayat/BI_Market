import React from 'react'

const Card = ({ image, title, area, price }) => {
  return (
    <div className="card">
      <img src={image} alt="Фото помещения" />
      <h3>{title}</h3>
      <p>Площадь: {area} м²<br />Цена: {price} млн ₸</p>
    </div>
  )
}

export default Card
