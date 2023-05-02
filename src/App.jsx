import './App.css'
import FloorPlan from './FloorPlan'

const bedNum = [1, 2, 3]
const size = ['Half', 'Full']

function App() {
  return (
    <div>
      <FloorPlan bedNum={bedNum} size={size}/>
    </div>
  )
}

export default App
