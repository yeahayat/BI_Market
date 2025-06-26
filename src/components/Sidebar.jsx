import React from 'react'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="tooltip">
        <h2>Фильтры</h2>
        <span className="tooltiptext">Выберите категории помещений</span>
      </div>
      <div className="filter-group">
        <label><input type="checkbox" /> Жилое</label>
        <label><input type="checkbox" /> Коммерческое</label>
        <label><input type="checkbox" /> Паркинг</label>
      </div>
      <button className="apply-btn">Применить</button>
    </aside>
  )
}

export default Sidebar
