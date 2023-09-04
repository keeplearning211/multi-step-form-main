import Fieldset from '../FieldSet'
import { BillingOptionValue } from '../../types'
import { useMultiStepFormContext } from '../MultiStepForm/context/useMultiStepFormContext'
import './planStep.css'
import BillingOption from './BillingOption'

function PlanStep() {
  const { yearly, setYearly } = useMultiStepFormContext()

  return (
    <Fieldset
      name="Select Your Plan"
      description="You have the option of monthly or yearly billing."
    >
      <div className="plan_content-wrapper">
        <div className={`billing-option-list ${yearly ? 'yearly-option' : ''}`}>
          <BillingOption value={yearly ? BillingOptionValue.ArcadeYr : BillingOptionValue.ArcadeMo} />
          <BillingOption value={yearly ? BillingOptionValue.AdvancedYr : BillingOptionValue.AdvancedMo} />
          <BillingOption value={yearly ? BillingOptionValue.ProYr : BillingOptionValue.ProMo} />
        </div>
        <div className="billing_period-wrapper">
          <p className={`billing_period-label ${yearly ? '' : 'selected'}`}>Monthly</p>
          <label className="billing_period-switch">
            <input type="checkbox" checked={yearly} onChange={() => setYearly(!yearly)} />
            <span className="billing_period-switch--slider"></span>
          </label>
          <p className={`billing_period-label ${yearly ? 'selected' : ''}`}>Yearly</p>
        </div>
      </div>
    </Fieldset>
  )
}

export default PlanStep