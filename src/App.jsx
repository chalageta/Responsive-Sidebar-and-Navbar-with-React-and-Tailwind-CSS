
import Dashboard from "./components/Dashboard"
import Siderbar from "./components/Siderbar"
import { useState } from "react"
 function App() {
  const [SiderbarToggle, setSiderbarToggle] = useState(false);
 

  return (
  
        <div className="flex">
          <Siderbar SiderbarToggle ={SiderbarToggle} />
          <Dashboard 
          SiderbarToggle = {SiderbarToggle}
          setSiderbarToggle = {setSiderbarToggle}
           />
     </div>
  )
}
export default App