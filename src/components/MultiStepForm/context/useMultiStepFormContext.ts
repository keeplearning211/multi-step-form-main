import { createContext, useContext } from 'react'
import { FormData, MultiStepFormContextValues } from '../../../types'

export const MultiStepFormContext = createContext<MultiStepFormContextValues>({
  step: 1,
  setStep: () => { },
  yearly: false,
  setYearly: () => { },
  handleInputChange: () => { },
  handelAddOnCheckboxChange: () => { },
  formData: {} as FormData,
  errors: {
    name: 'This field is required.',
    email: 'This field is required.',
    phoneNumber: 'This field is required.'
  },
  isInfoSubmitted: false,
})

export function useMultiStepFormContext() {
  return useContext(MultiStepFormContext)
}