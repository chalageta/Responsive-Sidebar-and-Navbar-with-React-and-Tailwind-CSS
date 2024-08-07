
import Dashboard from "./components/Dashboard"
import Siderbar from "./components/Siderbar"
import Navbar from "./components/Navbar"
const App = () => {
  return (
  
 
        <div className="flex">
          <Siderbar />
          <Dashboard />
          <Navbar />
        </div>
  )
}

export default App