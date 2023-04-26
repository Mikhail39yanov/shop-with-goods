import React, { ChangeEvent, FC, FormEvent, PropsWithChildren, useRef } from 'react'
import {
  $filterListSettings,
  filterProducts,
  sortProducts,
  updateSmartphones,
  updateMax,
  updateMin,
  updateLaptops,
  updateFragrances,
  updateSkincare,
} from '.'
import { useStore } from 'effector-react'
import Sort from '../ui/Sort'
import Filter from '../ui/Filter'

const FilterModel: FC<PropsWithChildren> = () => {
  // Фильтрация
  const { min, max, categoryGadgets, categoryPerfumery } = useStore($filterListSettings)
  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    filterProducts()
  }

  const onChangeLeftTrack = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+event.target.value, max - 1)
    event.target.value = value.toString()
    updateMin({ value: value, key: 'min' })
  }
  const onChangeRightTrack = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+event.target.value, min + 1)
    updateMax({ value: value, key: 'max' })
    event.target.value = value.toString()
  }

  // Категории gadgets
  const onChangeCheckSmartphones = () => updateSmartphones()
  const onChangeCheckLaptops = () => updateLaptops()

  // Категории perfumery
  const onChangeCheckFragrances = () => updateFragrances()
  const onChangeCheckSkincare = () => updateSkincare()

  /// Сортировка
  const refSort = useRef<HTMLUListElement>(null)

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
        <Filter
          handleSubmit={handleSubmit}
          onChangeLeftTrack={onChangeLeftTrack}
          onChangeRightTrack={onChangeRightTrack}
          onChangeCheckSmartphones={onChangeCheckSmartphones}
          onChangeCheckLaptops={onChangeCheckLaptops}
          onChangeCheckFragrances={onChangeCheckFragrances}
          onChangeCheckSkincare={onChangeCheckSkincare}
          min={min}
          max={max}
          minValRef={minValRef}
          maxValRef={maxValRef}
          smartphones={categoryGadgets.smartphones}
          laptops={categoryGadgets.laptops}
          fragrances={categoryPerfumery.fragrances}
          skincare={categoryPerfumery.skincare}
        />
        <Sort
          refSort={refSort}
          handleSortRating={handleSortRating}
          handleSortDown={handleSortDown}
          handleSortUP={handleSortUP}
        />
      </div>
    </div>
  )
}

export default FilterModel
