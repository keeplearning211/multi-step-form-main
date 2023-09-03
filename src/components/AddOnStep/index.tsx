import Fieldset from '../FieldSet'
import { useMultiStepFormContext } from '../MultiStepForm/context/useMultiStepFormContext'
import { AddOnOption } from './AddOnOption'
import './addOnStep.css'
import { getAddOnOptions } from './utils'


function AddOnStep() {
  const { yearly } = useMultiStepFormContext()
  return (
    <Fieldset
      name="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <div className="add_ons_content-wrapper">
        {getAddOnOptions(yearly).map(opt => (<AddOnOption key={opt.value} {...opt} />))}
      </div>
    </Fieldset>
  )
}

export default AddOnStep


