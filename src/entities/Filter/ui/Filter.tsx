import React, { FC, FormEvent, PropsWithChildren, useRef } from 'react'
import { sortProducts } from '../../../processes/model/filter'

const Filter: FC<PropsWithChildren> = () => {
  const refSort = useRef<HTMLUListElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const changeClassActiveSort = () => {
    if (refSort.current) {
      for (let i = 0; i < refSort.current.children.length; i++) {
        const element = refSort.current.children[i].children[0]
        element.classList.remove('sort__link--active')
      }
    }
  }

  const handleSortRating = (event: React.SyntheticEvent) => {
    if (event.currentTarget.classList.contains('sort__link--active')) {
      event.currentTarget.classList.remove('sort__link--active')
    } else {
      changeClassActiveSort()

      event.currentTarget.classList.add('sort__link--active')
      sortProducts('rating')
    }
  }

  const handleSortDown = (event: React.SyntheticEvent) => {
    if (event.currentTarget.classList.contains('sort__link--active')) {
      event.currentTarget.classList.remove('sort__link--active')
    } else {
      changeClassActiveSort()

      event.currentTarget.classList.add('sort__link--active')
      sortProducts('down')
    }
  }

  const handleSortUP = (event: React.SyntheticEvent) => {
    if (event.currentTarget.classList.contains('sort__link--active')) {
      event.currentTarget.classList.remove('sort__link--active')
    } else {
      changeClassActiveSort()
      event.currentTarget.classList.add('sort__link--active')
      sortProducts('up')
    }
  }

  return (
    <div className="filter-block content__filter-block">
      <div className="filter-block__row filter-block__row--xl-sb filter-block__row--xl-row">
        <div className="dropdown  dropdown--left filter filter-block__dropdown">
          <button
            className="btn dropdown__toggler"
            id="drop-01"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Фильтр по параметрам
          </button>
          <div className="dropdown__menu" aria-labelledby="drop-01">
            <form className="filter" onSubmit={handleSubmit}>
              <div className="baron filter__scroll">
                <div className="baron__rel">
                  <div className="baron__track">
                    <div className="baron__free">
                      <div className="baron__bar"></div>
                    </div>
                  </div>
                  <div className="filter__group">
                    <strong className="filter__title">Цена</strong>
                    <div className="filter__fieldset">
                      <div className="filter__field-row">
                        <input type="number" defaultValue={0} id="input-range-0" required />
                        <input type="number" defaultValue={100000} id="input-range-1" required />
                      </div>
                      <div className="range" id="slider-range">
                        <div className="range__line" style={{ width: '120px' }}>
                          <button className="range__tumbler" type="button"></button>
                          <button className="range__tumbler" style={{ width: '120px' }} type="button"></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter__group filter__group--no-line">
                <button className="btn btn--main btn--s-middle filter__btn">Показыть</button>
                <button className="btn btn--s-middle btn--white-b filter__btn" type="reset">
                  Сбросить
                </button>
              </div>
            </form>
          </div>
        </div>
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
      </div>
    </div>
  )
}

export default Filter
