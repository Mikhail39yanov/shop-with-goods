import { ChangeEvent, FormEvent } from 'react'

export type TFilterProps = {
  handleSubmit?: (event: FormEvent) => void
  onChangeLeftTrack?: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeRightTrack?: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeCheckSmartphones?: () => void
  onChangeCheckLaptops?: () => void
  onChangeCheckFragrances?: () => void
  onChangeCheckSkincare?: () => void
  min: number
  max: number
  smartphones: boolean
  laptops: boolean
  fragrances: boolean
  skincare: boolean
  minValRef?: React.RefObject<HTMLInputElement>
  maxValRef?: React.RefObject<HTMLInputElement>
}
