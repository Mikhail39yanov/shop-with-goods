import React, { FC, PropsWithChildren } from 'react'
import classnames from 'classnames'
import { TFilterProps } from '../types/TFilterProps'
import {
  $filterListSettings,
  resetFilter,
  updateApple,
  updateAvon,
  updateChanel,
  updateFragrances,
  updateHP,
  updateHuawei,
  updateInfinix,
  updateLaptops,
  updateMensShoes,
  updateMicrosoft,
  updateOPPO,
  updateProfessionalWear,
  updateRubber,
  updateSamsung,
  updateSkincare,
  updateSmartphones,
  updateSneakers,
  updateSoftCotton,
  updateTheWarehouse,
  updateTopSweater,
  updateTops,
  updateZara,
} from '../model'
import { useStore } from 'effector-react'
import { $currentCatalog } from '../../../entities/Catalog/model'

const Filter: FC<PropsWithChildren<TFilterProps>> = ({
  handleSubmit,
  onChangeLeftTrack,
  onChangeRightTrack,
  min,
  max,
  minValRef,
  maxValRef,
}) => {
  const { categoryGadgets, categoryPerfumery, categoryClothes, brandGadgets, brandPerfumery, brandClothes } =
    useStore($filterListSettings)
  const currentCatalog = useStore($currentCatalog)

  // Категории gadgets
  const onChangeCheckSmartphones = () => updateSmartphones()
  const onChangeCheckLaptops = () => updateLaptops()

  // Категории perfumery
  const onChangeCheckFragrances = () => updateFragrances()
  const onChangeCheckSkincare = () => updateSkincare()

  // Категории perfumery
  const onChangeCheckTops = () => updateTops()
  const onChangeCheckMensShoes = () => updateMensShoes()

  // Брэнд gadgets
  const onChangeCheckApple = () => updateApple()
  const onChangeCheckSamsung = () => updateSamsung()
  const onChangeCheckOPPO = () => updateOPPO()
  const onChangeCheckHuawei = () => updateHuawei()
  const onChangeCheckMicrosoft = () => updateMicrosoft()
  const onChangeCheckInfinix = () => updateInfinix()
  const onChangeCheckHP = () => updateHP()

  // Брэнд perfumery
  const onChangeCheckZara = () => updateZara()
  const onChangeCheckChanel = () => updateChanel()
  const onChangeCheckAvon = () => updateAvon()

  // Брэнд clothes
  const onChangeCheckProfessionalWear = () => updateProfessionalWear()
  const onChangeCheckSoftCotton = () => updateSoftCotton()
  const onChangeCheckTopSweater = () => updateTopSweater()
  const onChangeCheckSneakers = () => updateSneakers()
  const onChangeCheckRubber = () => updateRubber()
  const onChangeCheckTheWarehouse = () => updateTheWarehouse()

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
              {/* Цена */}
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
              {/* Категории */}
              <div className="filter__group">
                <strong className="filter__title">Категории</strong>
                <div className="filter__fieldset">
                  {currentCatalog === 'gadgets' ? (
                    <>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={categoryGadgets.smartphones}
                              onChange={() => updateSmartphones()}
                            />
                            <span className="field-checkbox__name-text">smartphones</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={categoryGadgets.laptops}
                              onChange={() => updateLaptops()}
                            />
                            <span className="field-checkbox__name-text">laptops</span>
                          </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {currentCatalog === 'perfumery' ? (
                    <>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={categoryPerfumery.fragrances}
                              onChange={() => updateFragrances()}
                            />
                            <span className="field-checkbox__name-text">fragrances</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={categoryPerfumery.skincare}
                              onChange={() => updateSkincare()}
                            />
                            <span className="field-checkbox__name-text">skincare</span>
                          </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {currentCatalog === 'clothes' ? (
                    <>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={categoryClothes.tops}
                              onChange={() => updateTops()}
                            />
                            <span className="field-checkbox__name-text">tops</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={categoryClothes['mens-shoes']}
                              onChange={() => updateMensShoes()}
                            />
                            <span className="field-checkbox__name-text">mensShoes</span>
                          </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              {/* Брэнд */}
              <div className="filter__group">
                <strong className="filter__title">Брэнд</strong>
                <div className="filter__fieldset">
                  {currentCatalog === 'gadgets' ? (
                    <>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandGadgets.Apple}
                              onChange={() => updateApple()}
                            />
                            <span className="field-checkbox__name-text">Apple</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandGadgets.Samsung}
                              onChange={() => updateSamsung()}
                            />
                            <span className="field-checkbox__name-text">Samsung</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandGadgets.OPPO}
                              onChange={() => updateOPPO()}
                            />
                            <span className="field-checkbox__name-text">OPPO</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandGadgets.Huawei}
                              onChange={() => updateHuawei()}
                            />
                            <span className="field-checkbox__name-text">Huawei</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandGadgets.Microsoft}
                              onChange={() => updateMicrosoft()}
                            />
                            <span className="field-checkbox__name-text">Microsoft</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandGadgets.Infinix}
                              onChange={() => updateInfinix()}
                            />
                            <span className="field-checkbox__name-text">Infinix</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandGadgets.HP}
                              onChange={() => updateHP()}
                            />
                            <span className="field-checkbox__name-text">HP</span>
                          </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {currentCatalog === 'perfumery' ? (
                    <>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandPerfumery.Zara}
                              onChange={() => updateZara()}
                            />
                            <span className="field-checkbox__name-text">Zara</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandPerfumery.Chanel}
                              onChange={() => updateChanel()}
                            />
                            <span className="field-checkbox__name-text">Chanel</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandPerfumery.Avon}
                              onChange={() => updateAvon()}
                            />
                            <span className="field-checkbox__name-text">Avon</span>
                          </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {currentCatalog === 'clothes' ? (
                    <>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandClothes['Professional Wear']}
                              onChange={() => updateProfessionalWear()}
                            />
                            <span className="field-checkbox__name-text">Professional Wear</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandClothes['Soft Cotton']}
                              onChange={() => updateSoftCotton()}
                            />
                            <span className="field-checkbox__name-text">Soft Cotton</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandClothes['Top Sweater']}
                              onChange={() => updateTopSweater()}
                            />
                            <span className="field-checkbox__name-text">Top Sweater</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandClothes.Sneakers}
                              onChange={() => updateSneakers()}
                            />
                            <span className="field-checkbox__name-text">Sneakers</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandClothes.Rubber}
                              onChange={() => updateRubber()}
                            />
                            <span className="field-checkbox__name-text">Rubber</span>
                          </label>
                        </div>
                      </div>
                      <div className="field-checkbox">
                        <div className="field-checkbox__input-wrap">
                          <label className="field-checkbox__name">
                            <input
                              className="field-checkbox__input"
                              type="checkbox"
                              name="check0"
                              checked={brandClothes['The Warehouse']}
                              onChange={() => updateTheWarehouse()}
                            />
                            <span className="field-checkbox__name-text">The Warehouse</span>
                          </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              {/* Материал */}
              {/* <div className="filter__group">
                <strong className="filter__title">Материал</strong>
                <div className="filter__fieldset">
                  <div className="field-checkbox">
                    <div className="field-checkbox__input-wrap">
                      <label className="field-checkbox__name">
                        <input className="field-checkbox__input" type="checkbox" name="check0" />
                        <span className="field-checkbox__name-text">???</span>
                      </label>
                    </div>
                  </div>
                  <div className="field-checkbox">
                    <div className="field-checkbox__input-wrap">
                      <label className="field-checkbox__name">
                        <input className="field-checkbox__input" type="checkbox" name="check0" />
                        <span className="field-checkbox__name-text">???</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* Цвет */}
              {/* <div className="filter__group">
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
                    <div className="field-checkbox__input-wrap field-checkbox__input-wrap--black">
                      <label className="field-checkbox__name">
                        <input className="field-checkbox__input" type="checkbox" name="check0" />
                        <span className="field-checkbox__name-text">Черный</span>
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
              </div> */}
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
