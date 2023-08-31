import StepNumber from '../StepNumber'
import './sidebar.css'


const steps = [
  { number: 1 },
  {
    number: 2,
    active: true
  },
  { number: 3 },
  { number: 4 },
]
function Sidebar() {
  return (
    <div className='sidebar'>
      {
        steps.map(step => <StepNumber key={step.number} step={step.number} active={step.active} />)
      }
    </div>
  )
}

export default Sidebar