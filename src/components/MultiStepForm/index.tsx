import { useState } from 'react'
import AddOnFieldSet from "../AddOnFieldSet"
import InfoStep from "../InfoStep"
import PlanStep from '../PlanStep'
import Sidebar from "../Sidebar"
import FishingUpStep from '../FishingUpStep'
import './multiStepForm.css'
import RegistrationThanks from '../RegistrationThanks'

function MultiStepForm() {
  const [yearly, setYearly] = useState<boolean>(false)

  return (
    <div className="multi-step-form">
      <Sidebar />
      <form className="subscription-form">
        <InfoStep />
        <PlanStep yearly={yearly} setYearly={setYearly} />
        <AddOnFieldSet yearly={yearly} />
        <FishingUpStep />
        <RegistrationThanks />
        <div className="form-action">
          <LinkButton text='Go Back' />
          <NextButton text="Next Step" />
        </div>
      </form>
    </div>
  )
}

export default MultiStepForm

export interface LinkButtonProps {
  text: string;
}

export function LinkButton({ text }: LinkButtonProps) {
  return (
    <button className="link-button">{text}</button>
  )
}

export interface NextButtonProps {
  text: string;
}

export function NextButton({ text }: NextButtonProps) {
  return (
    <button className="next-button">{text}</button>
  )
}

