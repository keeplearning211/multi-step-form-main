import StepNumber from '../StepNumber'
import './sidebar.css'


const steps = [1, 2, 3, 4]
function Sidebar() {
  return (
    <div className="sidebar">
      {
        steps.map(step => <StepNumber key={step} step={step} />)
      }
    </div>
  )
}

export default Sidebar