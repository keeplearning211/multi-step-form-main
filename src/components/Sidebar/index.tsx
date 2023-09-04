import StepItem from '../StepNumber'
import './sidebar.css'

const steps = [
  {
    number: 1,
    name: 'YOUR INFO'
  },
  {
    number: 2,
    name: 'SELECT PLAN'
  },
  {
    number: 3,
    name: 'ADD-ON'
  },
  {
    number: 4,
    name: 'SUMMARY'
  },
]
function Sidebar() {
  return (
    <div className="sidebar">
      {
        steps.map(step => <StepItem key={step.number} number={step.number} name={step.name} />)
      }
    </div>
  )
}

export default Sidebar