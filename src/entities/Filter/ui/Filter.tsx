import React, { FC, PropsWithChildren } from 'react'
import classnames from 'classnames'
import { TFilterProps } from '../types/TFilterProps'
import { resetFilter } from '../../../processes/model/filter'

const Filter: FC<PropsWithChildren<TFilterProps>> = ({
  handleSubmit,
  onChangeLeftTrack,
  onChangeRightTrack,
  min,
  max,
  minValRef,
  maxValRef,
}) => {
  return (
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
                    <input type="number" value={min} id="input-range-0" required onChange={onChangeLeftTrack} />
                    <input type="number" value={max} id="input-range-1" required onChange={onChangeRightTrack} />
                  </div>
                  <div className="slider">
                    <div className="slider__track" />
                    <input
                      type="range"
                      min={0}
                      max={10000}
                      value={min}
                      ref={minValRef}
                      onChange={onChangeLeftTrack}
                      className={classnames('thumb thumb--zindex-3', {
                        'thumb--zindex-5': min > 10000 - 100,
                      })}
                    />
                    <input
                      type="range"
                      min={0}
                      max={10000}
                      value={max}
                      ref={maxValRef}
                      onChange={onChangeRightTrack}
                      className="thumb thumb--zindex-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="filter__group filter__group--no-line">
            <button className="btn btn--main btn--s-middle filter__btn">Показать</button>
            <button
              className="btn btn--s-middle btn--white-b filter__btn"
              onClick={() => {
                resetFilter()
              }}
            >
              Сбросить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filter
