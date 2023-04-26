import { createEvent, createStore } from 'effector'
import { TFilterRangeProduct } from '../types/TFilterRangeProduct'

export const sortProducts = createEvent<string>()
export const filterProducts = createEvent()
export const resetFilter = createEvent()
export const updateMin = createEvent<{ value: number; key: string }>()
export const updateMax = createEvent<{ value: number; key: string }>()
// Категории gadgets
export const updateSmartphones = createEvent()
export const updateLaptops = createEvent()
// Категории perfumery
export const updateFragrances = createEvent()
export const updateSkincare = createEvent()
// Категории clothes
export const updateTops = createEvent()
export const updateMensShoes = createEvent()
// Брэнд gadgets
export const updateApple = createEvent()
export const updateSamsung = createEvent()
export const updateOPPO = createEvent()
export const updateHuawei = createEvent()
export const updateMicrosoft = createEvent()
export const updateInfinix = createEvent()
export const updateHP = createEvent()
// Брэнд perfumery
export const updateZara = createEvent()
export const updateChanel = createEvent()
export const updateAvon = createEvent()
// Брэнд clothes
export const updateProfessionalWear = createEvent()
export const updateSoftCotton = createEvent()
export const updateTopSweater = createEvent()
export const updateSneakers = createEvent()
export const updateRubber = createEvent()
export const updateTheWarehouse = createEvent()

export const $filterListSettings = createStore<TFilterRangeProduct>({
  min: 0,
  max: 10000,
  categoryGadgets: { smartphones: false, laptops: false },
  categoryPerfumery: { fragrances: false, skincare: false },
  categoryClothes: { tops: false, 'mens-shoes': false },
  brandGadgets: {
    Apple: false,
    Samsung: false,
    OPPO: false,
    Huawei: false,
    Microsoft: false,
    Infinix: false,
    HP: false,
  },
  brandPerfumery: {
    Zara: false,
    Chanel: false,
    Avon: false,
  },
  brandClothes: {
    'Professional Wear': false,
    'Soft Cotton': false,
    'Top Sweater': false,
    Sneakers: false,
    Rubber: false,
    'The Warehouse': false,
  },
})

// $filterListSettings.watch((item) => {
//   console.log(item)
// })
