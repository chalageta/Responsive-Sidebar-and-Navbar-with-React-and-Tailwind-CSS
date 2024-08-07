
import Navbar from './Navbar'
const Dashboard = ({SiderbarToggle,setSiderbarToggle}) => {
  return (
    <div className={`${SiderbarToggle ? '' :  ' ml-64 '} w-full `}>
      <Navbar SiderbarToggle = {SiderbarToggle}
          setSiderbarToggle = {setSiderbarToggle} />
    </div>
  )
}

export default Dashboard