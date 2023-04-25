import { ChangeEvent, FormEvent } from 'react'

export type TProductProps = {
  handleDecrement?: () => void
  handleIncrement?: () => void
  handleOnchange?: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit?: (event: FormEvent) => void
  value: string
}
