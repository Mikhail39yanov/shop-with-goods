import { ChangeEvent, FormEvent } from 'react'

export type TAuthModal = {
  handleSubmit?: (event: FormEvent) => void
  handleChangeLogin?: (event: ChangeEvent<HTMLInputElement>) => void
  handleChangePassword?: (event: ChangeEvent<HTMLInputElement>) => void
  handleClickClose?: (event: MouseEvent) => void
  login?: string
  password?: string
  valueLoginError?: string
  valuePassError?: string
  refContent?: React.RefObject<HTMLDivElement>
}
