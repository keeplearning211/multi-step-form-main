import Fieldset from "../FieldSet"
import "./planStep.css"

export interface PlanStepProps {
  yearly: boolean,
  setYearly: (yearly: boolean) => void,
}

function PlanStep({ yearly, setYearly }: PlanStepProps) {

  return (
    <Fieldset
      name="Select Your Plan"
      description="You have the option of monthly or yearly billing."
    >
      <div className="plan_content-wrapper">
        <BillingOption value={yearly ? BillingOptionValue.ArcadeYr : BillingOptionValue.ArcadeMo} />
        <BillingOption value={yearly ? BillingOptionValue.AdvancedYr : BillingOptionValue.AdvancedMo} />
        <BillingOption value={yearly ? BillingOptionValue.ProYr : BillingOptionValue.ProMo} />
        <div className="billing_period-wrapper">
          <p className="billing_period-monthly">Monthly</p>
          <label className="billing_period-switch">
            <input type="checkbox" checked={yearly} onChange={() => setYearly(!yearly)} />
            <span className="billing_period-switch--slider"></span>
          </label>
          <p className="billing_period-yearly">Yearly</p>

        </div>
      </div>
    </Fieldset>
  )
}

export default PlanStep

// this affects to the css class
enum BillingOptionValue {
  ArcadeMo = 9,
  AdvancedMo = 12,
  ProMo = 15,
  ArcadeYr = 90,
  AdvancedYr = 120,
  ProYr = 150,
}

enum BillingOptionIcon {
  Arcade = 'arcade',
  Advanced = 'advanced',
  Pro = 'pro',
}


export interface BillingOptionProps {
  value: BillingOptionValue;
}

function BillingOption({ value }: BillingOptionProps) {
  function getIconName(value: BillingOptionValue): BillingOptionIcon {
    switch (value) {
      case BillingOptionValue.ArcadeMo:
      case BillingOptionValue.ArcadeYr:
        return BillingOptionIcon.Arcade

      case BillingOptionValue.AdvancedMo:
      case BillingOptionValue.AdvancedYr:
        return BillingOptionIcon.Advanced

      case BillingOptionValue.ProMo:
      case BillingOptionValue.ProYr:
        return BillingOptionIcon.Pro

      default:
        return BillingOptionIcon.Arcade

    }
  }

  const isYearly = (value: BillingOptionValue): boolean => {
    switch (value) {
      case BillingOptionValue.ArcadeYr:
      case BillingOptionValue.AdvancedYr:
      case BillingOptionValue.ProYr:
        return true

      default:
        return false;
    }
  }
  return (
    <label className="billing_option-container">
      <input type="radio" name="billingOption" value={value} />
      <div className="billing_option-icon" data-icon={getIconName(value)}></div>
      <div className="billing_option-name-price">
        <p>Arcade</p>
        <p>$9/mo</p>
        {isYearly(value) ? <p className="billing_option-free"> 2 months free</p> : null}
      </div>
    </label>
  )
}
