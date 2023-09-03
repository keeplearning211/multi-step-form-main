import { BillingOptionIconName, BillingOptionValue } from '../../types';
import { useMultiStepFormContext } from '../MultiStepForm/context/useMultiStepFormContext';
import { planName, planPrice } from './constant';

export interface BillingOptionProps {
  value: BillingOptionValue;
}

function BillingOption({ value }: BillingOptionProps) {
  const { yearly, formData, handleInputChange } = useMultiStepFormContext()
  const selectedValue = formData.billingOption

  return (
    <label className={`billing_option-container ${value === selectedValue ? 'selected' : ''}`} tabIndex={0} >
      <input type="radio" name="billingOption" value={value} onChange={handleInputChange} checked={value === selectedValue} />
      <div className="billing_option-icon" data-icon={iconName[value]}></div>
      <div className="billing_option-name_price">
        <p className="billing_option-name">{planName[value]}</p>
        <p className="billing_option-price">${planPrice[value]}/{yearly ? 'yr' : 'mo'}</p>
        {yearly ? <p className="billing_option-free"> 2 months free</p> : null}
      </div>
    </label>
  )
}

export default BillingOption

const iconName = {
  [BillingOptionValue.ArcadeMo]: BillingOptionIconName.Arcade,
  [BillingOptionValue.ArcadeYr]: BillingOptionIconName.Arcade,
  [BillingOptionValue.AdvancedMo]: BillingOptionIconName.Advanced,
  [BillingOptionValue.AdvancedYr]: BillingOptionIconName.Advanced,
  [BillingOptionValue.ProMo]: BillingOptionIconName.Pro,
  [BillingOptionValue.ProYr]: BillingOptionIconName.Pro,
}