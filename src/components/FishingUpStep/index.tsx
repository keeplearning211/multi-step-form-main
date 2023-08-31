import Fieldset from '../FieldSet'
import './fishingUpStep.css'

export default function FishingUpStep() {
  return (
    <Fieldset
      name="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div className="fishing_up-wrapper">
        <div className="fishing_up-plan">
          <p className="fishing_up-plan--name">
            Arcade (Monthly)
            <span className='fishing_up-plan--action'>Change</span>
          </p>
          <p className="fishing_up-plan--price">$9/mo</p>
        </div>
        <div className="fishing_up-add_ons--wrapper">
          <div className="fishing_up-add_ons--item">
            <p className="fishing_up-add_ons--item__name">Online service</p>
            <p className="fishing_up-add_ons--item__price">+$1/mo</p>
          </div>
          <div className="fishing_up-add_ons--item">
            <p className="fishing_up-add_ons--item__name">Larger storage</p>
            <p className="fishing_up-add_ons--item__price">+$2/mo</p>
          </div>
        </div>
        <div className="fishing_up-total">
          <p className="fishing_up-total--label">Total (per month)</p>
          <p className="fishing_up-total--value">$12/mo</p>
        </div>

      </div>
    </Fieldset>
  )
}
