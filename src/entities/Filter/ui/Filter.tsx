import { FC, PropsWithChildren } from 'react'

const Filter: FC<PropsWithChildren> = () => {
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
            <form className="filter">
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
                        <input type="number" value="0" id="input-range-0" required />
                        <input type="number" value="100000" id="input-range-1" required />
                      </div>
                      <div className="range" id="slider-range">
                        <div className="range__line" style={{ width: '120px' }}>
                          <button className="range__tumbler" type="button"></button>
                          <button className="range__tumbler" style={{ width: '120px' }} type="button"></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter__group">
                    <strong className="filter__title">Состав</strong>
                    <div className="filter__fieldset">
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input className="field-checkbox__input" type="checkbox" name="check0" />
                            <span className="field-checkbox__name-text">Шерсть</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input className="field-checkbox__input" type="checkbox" name="check0" />
                            <span className="field-checkbox__name-text">Вискоза</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input className="field-checkbox__input" type="checkbox" name="check0" />
                            <span className="field-checkbox__name-text">Лен</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter__group">
                    <strong className="filter__title">Цвет</strong>
                    <div className="filter__fieldset">
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap  field-checkbox__input-wrap--white">
                          <label className="field-checkbox__name">
                            <input className="field-checkbox__input" type="checkbox" name="check0" />
                            <span className="field-checkbox__name-text">Белый</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap  field-checkbox__input-wrap--yellow">
                          <label className="field-checkbox__name">
                            <input className="field-checkbox__input" type="checkbox" name="check0" />
                            <span className="field-checkbox__name-text">Желтый</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap  field-checkbox__input-wrap--green">
                          <label className="field-checkbox__name">
                            <input className="field-checkbox__input" type="checkbox" name="check0" />
                            <span className="field-checkbox__name-text">Зеленый</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap  field-checkbox__input-wrap--gradient">
                          <label className="field-checkbox__name">
                            <input className="field-checkbox__input" type="checkbox" name="check0" />
                            <span className="field-checkbox__name-text">Цветной</span>
                          </label>
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
            <ul className="sort">
              <li className="sort__item">
                <a className="sort__link sort__link--active" href="">
                  По популярности
                </a>
              </li>
              <li className="sort__item">
                <a className="sort__link" href="">
                  По новизне
                </a>
              </li>
              <li className="sort__item">
                <a className="sort__link" href="">
                  По убыванию цены
                </a>
              </li>
              <li className="sort__item">
                <a className="sort__link" href="">
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
