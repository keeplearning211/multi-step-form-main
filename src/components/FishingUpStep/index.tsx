import { AddOnOptionProps } from '../AddOnStep/AddOnOption'
import { getAddOnOptions } from '../AddOnStep/utils'
import Fieldset from '../FieldSet'
import { useMultiStepFormContext } from '../MultiStepForm/context/useMultiStepFormContext'
import { planName, planPrice } from '../PlanStep/constant'
import './fishingUpStep.css'

export default function FishingUpStep() {
  const { formData, yearly, setStep } = useMultiStepFormContext()
  const selectedAddOnOptions = getSelectedAddOnOptions(getAddOnOptions(yearly), formData.addOnOption)

  const total = planPrice[formData.billingOption] +
    selectedAddOnOptions.reduce((accumulator, option) => accumulator + option.price, 0)

  return (
    <Fieldset
      name="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div className="fishing_up-wrapper">
        <div className="fishing_up-plan">
          <p className="fishing_up-plan--name">
            {`${planName[formData.billingOption]} (${yearly ? 'Yearly' : 'Monthly'})`}
            <span className="fishing_up-plan--action" onClick={() => setStep(2)}>Change</span>
          </p>
          <p className="fishing_up-plan--price">{`$${planPrice[formData.billingOption]}/${yearly ? 'yr' : 'mo'}`}</p>
        </div>
        <div className="fishing_up-add_ons--wrapper">
          {
            selectedAddOnOptions.map(opt => (
              <div className="fishing_up-add_ons--item" key={opt.value}>
                <p className="fishing_up-add_ons--item__name">{opt.name}</p>
                <p className="fishing_up-add_ons--item__price">{`+$${opt.price}/${yearly ? 'yr' : 'mo'}`}</p>
              </div>
            )
            )}
        </div>
        <div className="fishing_up-total">
          <p className="fishing_up-total--label">Total (per {yearly ? 'year' : 'month'})</p>
          <p className="fishing_up-total--value">{`$${total}/${yearly ? 'yr' : 'mo'}`}</p>
        </div>

      </div>
    </Fieldset>
  )
}

function getSelectedAddOnOptions(optionList: AddOnOptionProps[], selectedValue: string[]): AddOnOptionProps[] {
  return optionList.filter(opt => selectedValue.includes(opt.value))
}