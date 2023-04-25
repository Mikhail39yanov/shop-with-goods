import { ChangeEvent, FormEvent } from 'react'

export type TFilterProps = {
  handleSubmit?: (event: FormEvent) => void
  onChangeLeftTrack?: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeRightTrack?: (event: ChangeEvent<HTMLInputElement>) => void
  min: number
  max: number
  minValRef?: React.RefObject<HTMLInputElement>
  maxValRef?: React.RefObject<HTMLInputElement>
}
