import { useMultiStepFormContext } from '../MultiStepForm/context/useMultiStepFormContext';
import './stepNumber.css'

export interface StepNumberProps {
  step: number;
}

function StepNumber({ step }: StepNumberProps) {
  const { step: activeStep } = useMultiStepFormContext()

  const isActive = activeStep === step || step === 4 && activeStep > step
  return (
    <div className={`step-number ${isActive ? 'active' : ''}`}>{step}</div>
  )
}

export default StepNumber