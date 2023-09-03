import { AddOnOptionValue } from '../../types'
import { useMultiStepFormContext } from '../MultiStepForm/context/useMultiStepFormContext'

export interface AddOnOptionProps {
  name: string,
  description: string,
  value: AddOnOptionValue,
  price: number,
}

export function AddOnOption({ name, description, price, value }: AddOnOptionProps) {
  const { formData: { addOnOption }, handelAddOnCheckboxChange, yearly } = useMultiStepFormContext()
  return (
    <label className={`add_on_option-container ${addOnOption.includes(value) ? 'selected' : ''}`}>
      <input type="checkbox" name="addOnOption" value={value} onChange={handelAddOnCheckboxChange} checked={addOnOption.includes(value)} />
      <span className="add_on_option-checkmark"> <img src="src/assets/images/icon-checkmark.svg" /> </span>
      <p className="add_on_option-name">{name}</p>
      <p className="add_on_option-description">{description}</p>
      <p className="add_on_option-price">{`+$${price}/${yearly ? 'yr' : 'mo'}`}</p>
    </label>
  )
}