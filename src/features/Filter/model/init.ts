import { sample } from 'effector'
import { $productList, $productListFilter } from '../../Product/model'
import {
  $filterListSettings,
  filterProducts,
  resetFilter,
  sortProducts,
  updateSmartphones,
  updateMax,
  updateMin,
  updateLaptops,
  updateFragrances,
  updateSkincare,
  updateApple,
  updateSamsung,
  updateOPPO,
  updateHuawei,
  updateMicrosoft,
  updateInfinix,
  updateHP,
  updateZara,
  updateChanel,
  updateAvon,
  updateTops,
  updateMensShoes,
  updateProfessionalWear,
  updateSoftCotton,
  updateTopSweater,
  updateSneakers,
  updateRubber,
  updateTheWarehouse,
  $filters,
  resetFilters,
} from '.'
import { TFilterRangeProduct, TFilters } from '../types/TFilterRangeProduct'
import { TProducts } from '../../Product/types/TProduct'
import { $currentCatalog } from '../../../entities/Catalog/model'

$filterListSettings
  .reset(resetFilter)
  .on(updateMin, (form, { key, value }) => ({
    ...form,
    [key]: value,
  }))
  .on(updateMax, (form, { key, value }) => ({
    ...form,
    [key]: value,
  }))
  // Категории gadgets
  .on(updateSmartphones, (form) => {
    return {
      ...form,
      categoryGadgets: {
        smartphones: !form.categoryGadgets.smartphones,
        laptops: form.categoryGadgets.laptops,
      },
    }
  })
  .on(updateLaptops, (form) => {
    return {
      ...form,
      categoryGadgets: {
        smartphones: form.categoryGadgets.smartphones,
        laptops: !form.categoryGadgets.laptops,
      },
    }
  })
  // Категории perfumery
  .on(updateFragrances, (form) => {
    return {
      ...form,
      categoryPerfumery: {
        fragrances: !form.categoryPerfumery.fragrances,
        skincare: form.categoryPerfumery.skincare,
      },
    }
  })
  .on(updateSkincare, (form) => {
    return {
      ...form,
      categoryPerfumery: {
        fragrances: form.categoryPerfumery.fragrances,
        skincare: !form.categoryPerfumery.skincare,
      },
    }
  })
  // Категории clothes
  .on(updateTops, (form) => {
    return {
      ...form,
      categoryClothes: {
        tops: !form.categoryClothes.tops,
        'mens-shoes': form.categoryClothes['mens-shoes'],
      },
    }
  })
  .on(updateMensShoes, (form) => {
    return {
      ...form,
      categoryClothes: {
        tops: form.categoryClothes.tops,
        'mens-shoes': !form.categoryClothes['mens-shoes'],
      },
    }
  })
  // Брэнд gadgets
  .on(updateApple, (form) => {
    return {
      ...form,
      brandGadgets: {
        Apple: !form.brandGadgets.Apple,
        Samsung: form.brandGadgets.Samsung,
        OPPO: form.brandGadgets.OPPO,
        Huawei: form.brandGadgets.Huawei,
        Microsoft: form.brandGadgets.Microsoft,
        Infinix: form.brandGadgets.Infinix,
        HP: form.brandGadgets.HP,
      },
    }
  })
  .on(updateSamsung, (form) => {
    return {
      ...form,
      brandGadgets: {
        Apple: form.brandGadgets.Apple,
        Samsung: !form.brandGadgets.Samsung,
        OPPO: form.brandGadgets.OPPO,
        Huawei: form.brandGadgets.Huawei,
        Microsoft: form.brandGadgets.Microsoft,
        Infinix: form.brandGadgets.Infinix,
        HP: form.brandGadgets.HP,
      },
    }
  })
  .on(updateOPPO, (form) => {
    return {
      ...form,
      brandGadgets: {
        Apple: form.brandGadgets.Apple,
        Samsung: form.brandGadgets.Samsung,
        OPPO: !form.brandGadgets.OPPO,
        Huawei: form.brandGadgets.Huawei,
        Microsoft: form.brandGadgets.Microsoft,
        Infinix: form.brandGadgets.Infinix,
        HP: form.brandGadgets.HP,
      },
    }
  })
  .on(updateHuawei, (form) => {
    return {
      ...form,
      brandGadgets: {
        Apple: form.brandGadgets.Apple,
        Samsung: form.brandGadgets.Samsung,
        OPPO: form.brandGadgets.OPPO,
        Huawei: !form.brandGadgets.Huawei,
        Microsoft: form.brandGadgets.Microsoft,
        Infinix: form.brandGadgets.Infinix,
        HP: form.brandGadgets.HP,
      },
    }
  })
  .on(updateMicrosoft, (form) => {
    return {
      ...form,
      brandGadgets: {
        Apple: form.brandGadgets.Apple,
        Samsung: form.brandGadgets.Samsung,
        OPPO: form.brandGadgets.OPPO,
        Huawei: form.brandGadgets.Huawei,
        Microsoft: !form.brandGadgets.Microsoft,
        Infinix: form.brandGadgets.Infinix,
        HP: form.brandGadgets.HP,
      },
    }
  })
  .on(updateInfinix, (form) => {
    return {
      ...form,
      brandGadgets: {
        Apple: form.brandGadgets.Apple,
        Samsung: form.brandGadgets.Samsung,
        OPPO: form.brandGadgets.OPPO,
        Huawei: form.brandGadgets.Huawei,
        Microsoft: form.brandGadgets.Microsoft,
        Infinix: !form.brandGadgets.Infinix,
        HP: form.brandGadgets.HP,
      },
    }
  })
  .on(updateHP, (form) => {
    return {
      ...form,
      brandGadgets: {
        Apple: form.brandGadgets.Apple,
        Samsung: form.brandGadgets.Samsung,
        OPPO: form.brandGadgets.OPPO,
        Huawei: form.brandGadgets.Huawei,
        Microsoft: form.brandGadgets.Microsoft,
        Infinix: form.brandGadgets.Infinix,
        HP: !form.brandGadgets.HP,
      },
    }
  })
  // Брэнд perfumery
  .on(updateZara, (form) => {
    return {
      ...form,
      brandPerfumery: {
        Zara: !form.brandPerfumery.Zara,
        Chanel: form.brandPerfumery.Chanel,
        Avon: form.brandPerfumery.Avon,
      },
    }
  })
  .on(updateChanel, (form) => {
    return {
      ...form,
      brandPerfumery: {
        Zara: form.brandPerfumery.Zara,
        Chanel: !form.brandPerfumery.Chanel,
        Avon: form.brandPerfumery.Avon,
      },
    }
  })
  .on(updateAvon, (form) => {
    return {
      ...form,
      brandPerfumery: {
        Zara: form.brandPerfumery.Zara,
        Chanel: form.brandPerfumery.Chanel,
        Avon: !form.brandPerfumery.Avon,
      },
    }
  })
  // Брэнд clothes
  .on(updateProfessionalWear, (form) => {
    return {
      ...form,
      brandClothes: {
        'Professional Wear': !form.brandClothes['Professional Wear'],
        'Soft Cotton': form.brandClothes['Soft Cotton'],
        'Top Sweater': form.brandClothes['Top Sweater'],
        Sneakers: form.brandClothes.Sneakers,
        Rubber: form.brandClothes.Rubber,
        'The Warehouse': form.brandClothes['The Warehouse'],
      },
    }
  })
  .on(updateSoftCotton, (form) => {
    return {
      ...form,
      brandClothes: {
        'Professional Wear': form.brandClothes['Professional Wear'],
        'Soft Cotton': !form.brandClothes['Soft Cotton'],
        'Top Sweater': form.brandClothes['Top Sweater'],
        Sneakers: form.brandClothes.Sneakers,
        Rubber: form.brandClothes.Rubber,
        'The Warehouse': form.brandClothes['The Warehouse'],
      },
    }
  })
  .on(updateTopSweater, (form) => {
    return {
      ...form,
      brandClothes: {
        'Professional Wear': form.brandClothes['Professional Wear'],
        'Soft Cotton': form.brandClothes['Soft Cotton'],
        'Top Sweater': !form.brandClothes['Top Sweater'],
        Sneakers: form.brandClothes.Sneakers,
        Rubber: form.brandClothes.Rubber,
        'The Warehouse': form.brandClothes['The Warehouse'],
      },
    }
  })
  .on(updateSneakers, (form) => {
    return {
      ...form,
      brandClothes: {
        'Professional Wear': form.brandClothes['Professional Wear'],
        'Soft Cotton': form.brandClothes['Soft Cotton'],
        'Top Sweater': form.brandClothes['Top Sweater'],
        Sneakers: !form.brandClothes.Sneakers,
        Rubber: form.brandClothes.Rubber,
        'The Warehouse': form.brandClothes['The Warehouse'],
      },
    }
  })
  .on(updateRubber, (form) => {
    return {
      ...form,
      brandClothes: {
        'Professional Wear': form.brandClothes['Professional Wear'],
        'Soft Cotton': form.brandClothes['Soft Cotton'],
        'Top Sweater': form.brandClothes['Top Sweater'],
        Sneakers: form.brandClothes.Sneakers,
        Rubber: !form.brandClothes.Rubber,
        'The Warehouse': form.brandClothes['The Warehouse'],
      },
    }
  })
  .on(updateTheWarehouse, (form) => {
    return {
      ...form,
      brandClothes: {
        'Professional Wear': form.brandClothes['Professional Wear'],
        'Soft Cotton': form.brandClothes['Soft Cotton'],
        'Top Sweater': form.brandClothes['Top Sweater'],
        Sneakers: form.brandClothes.Sneakers,
        Rubber: form.brandClothes.Rubber,
        'The Warehouse': !form.brandClothes['The Warehouse'],
      },
    }
  })

$filters.on(resetFilters, (state) => {
  return {
    // ...state,
    category: [],
    brand: [],
  }
})

sample({
  source: $productListFilter,
  clock: [sortProducts],
  fn: (array, column) => {
    let copyArr = [...array]

    copyArr = sortItems(copyArr, column) || []

    return copyArr
  },
  target: $productListFilter,
})

sample({
  source: [$productList, $filterListSettings, $currentCatalog, $filters],
  clock: [filterProducts],
  fn: (arrProduct) => {
    const filteredArray = arrProduct[0] as TProducts
    const {
      min,
      max,
      categoryGadgets,
      categoryPerfumery,
      categoryClothes,
      brandGadgets,
      brandPerfumery,
      brandClothes,
    } = arrProduct[1] as TFilterRangeProduct
    const currentCatalog = arrProduct[2]
    let filter = arrProduct[3] as TFilters
    // console.log(arrProduct)

    let filteredList = [...filteredArray]
    let filters = { ...filter }

    // Фильтр цены общий
    filteredList = filteredList.filter((item) => {
      if (item.price) {
        if (item.price >= min && item.price <= max) {
          return item
        }
      }
    })

    const nestedFilter = (targetArray: TProducts, filters: TFilters) => {
      let filterKeys = Object.keys(filters)

      return targetArray.filter((eachObj) => {
        return filterKeys.every((eachKey) => {
          if (!filters[eachKey].length) {
            return true
          }
          // @ts-ignore
          return filters[eachKey].includes(eachObj[eachKey])
        })
      })
    }
    Object.keys({ ...categoryGadgets, ...categoryPerfumery, ...categoryClothes }).map((key) => {
      if (categoryGadgets[key] || categoryPerfumery[key] || categoryClothes[key]) {
        if (filters.category.filter((item) => item === key).length > 0) {
          return
        } else {
          filters.category.push(key)
        }
      } else {
        filters.category = filters.category.filter((obj) => obj !== key)
      }
    })

    Object.keys({ ...brandGadgets, ...brandPerfumery, ...brandClothes }).map((key) => {
      if (brandGadgets[key] || brandPerfumery[key] || brandClothes[key]) {
        if (filters.brand.filter((item) => item === key).length > 0) {
          return
        } else {
          filters.brand.push(key)
        }
      } else {
        filters.brand = filters.brand.filter((obj) => obj !== key)
      }
    })

    if (currentCatalog === 'gadgets') {
      filteredList = nestedFilter(filteredList, filters)
    } else if (currentCatalog === 'perfumery') {
      filteredList = nestedFilter(filteredList, filters)
    } else if (currentCatalog === 'clothes') {
      filteredList = nestedFilter(filteredList, filters)
    }

    // console.log(filters)
    // console.log(filteredList)

    return filteredList
  },
  target: $productListFilter,
})

function sortItems(arrayProduct: TProducts, column = 'default', dir = false) {
  if (column === 'rating') {
    return arrayProduct.sort((a, b) => {
      if (a.rating === undefined || b.rating === undefined) {
        return 0
      }

      if (dir === false ? a.rating > b.rating : a.rating < b.rating) return -1

      return 0
    })
  } else if (column === 'down') {
    return arrayProduct.sort((a, b) => {
      if (a.price === undefined || b.price === undefined) {
        return 0
      }

      if (dir === true ? a.price > b.price : a.price < b.price) return -1

      return 0
    })
  } else if (column === 'up') {
    return arrayProduct.sort((a, b) => {
      if (a.price === undefined || b.price === undefined) {
        return 0
      }

      if (dir === false ? a.price > b.price : a.price < b.price) return -1

      return 0
    })
  } else if (column === 'default') {
    return arrayProduct.sort((a, b) => {
      if (a.rating === undefined || b.rating === undefined) {
        return 0
      }

      if (dir === false ? a.rating > b.rating : a.rating < b.rating) return -1

      return 0
    })
  }
}
