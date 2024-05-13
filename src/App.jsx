import './App.css'
import NavBar from './Components/NavBar'
import TotalPrice from './Components/TotalPrice'
import ItemsAdded from './Components/ItemsAdded'
import Panel from './Components/Panel'
import CheckIn from './Components/CheckIn'

function App() {

  return (
    <>
    <div className="App">
    <NavBar/>
    <TotalPrice/>
    <ItemsAdded/>
    <Panel/>
    <CheckIn/>
    </div>
    </>
  )
}

export default App
