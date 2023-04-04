import { ChangeEvent, FormEvent } from 'react'

export type TAuthModal = {
  handleSubmit?: (event: FormEvent) => void
  handleChangeLogin?: (event: ChangeEvent<HTMLInputElement>) => void
  handleChangePassword?: (event: ChangeEvent<HTMLInputElement>) => void
  closeModal: () => void
  login: string
  password: string
}
