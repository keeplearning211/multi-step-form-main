import './stepNumber.css'

export interface StepNumberProps {
  step: number;
  active?: boolean;
}

function StepNumber({ step, active }: StepNumberProps) {
  return (
    <div className={`step-number ${active ? 'active' : ''}`}>{step}</div>
  )
}

export default StepNumber