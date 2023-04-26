export type TFilteredMap = {
  [key: string]: boolean
}

export type TFilterRangeProduct = {
  min: number
  max: number
  categoryGadgets: TFilteredMap
  categoryPerfumery: TFilteredMap
  categoryClothes: TFilteredMap
  brandGadgets: TFilteredMap
  brandPerfumery: TFilteredMap
  brandClothes: TFilteredMap
  // category: { smartphones: boolean; laptops: boolean }
}
