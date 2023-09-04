import { useMultiStepFormContext } from '../MultiStepForm/context/useMultiStepFormContext';
import './stepNumber.css'

export interface StepProps {
  number: number;
  name: string;
}

function StepItem({ number, name }: StepProps) {
  const { step: activeStep } = useMultiStepFormContext()

  const isActive = activeStep === number || number === 4 && activeStep > number
  return (
    <div className="step-item">
      <div className={`step-number ${isActive ? 'active' : ''}`}>{number}</div>
      <div className="step-name-sub_name">
        <p className="step-sub_name">{`Step ${number}`}</p>
        <p className="step-name">{name}</p>
      </div>
    </div>
  )
}

export default StepItem