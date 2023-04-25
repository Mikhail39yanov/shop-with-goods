import { FC, PropsWithChildren } from 'react'
import { TSortProps } from '../types/TSortProps'

const Sort: FC<PropsWithChildren<TSortProps>> = ({ refSort, handleSortRating, handleSortDown, handleSortUP }) => {
  return (
    <div className="dropdown  dropdown--right filter-block__dropdown">
      <button
        className="btn dropdown__toggler"
        id="drop-02"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        По популярности
      </button>
      <div className="dropdown__menu" aria-labelledby="drop-02">
        <ul className="sort" ref={refSort}>
          <li className="sort__item">
            <a className={`sort__link`} onClick={handleSortRating}>
              По популярности
            </a>
          </li>
          <li className="sort__item">
            <a className={`sort__link`} onClick={handleSortDown}>
              По убыванию цены
            </a>
          </li>
          <li className="sort__item">
            <a className={`sort__link`} onClick={handleSortUP}>
              По возрастанию цены
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sort
