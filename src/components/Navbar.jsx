import PropTypes from 'prop-types';

const Navbar = ({ SiderbarToggle, setSiderbarToggle }) => {

  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between ">
      <div className="flex items-center text-xl">
        <i className="fa fa-bars text-white me-4 cursor-pointer"
         onClick={() => setSiderbarToggle(!SiderbarToggle) }></i>
        <span className="text-white font-semibold">E-Commerce Website</span>
      </div>

      <div className="flex  items-center gap-x-5 ">
      <div className=" flex md:w-65 relative">
  <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
    <button className="p-1 flex focus: outline-none text-white md:text-black">
      <i className="fa fa-search"></i>
   </button>
  </span>
  <input type="text" className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block" />
</div>
<div className="text-white"> <i className="fa fa-bell w-6 h-6"></i></div>

<div className="relative ">
  <button className="text-white  group">
    <i className="fa fa-user-circle w-6 h-6 mt-1"></i>
  
  <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block group-hover:block  top-full right-0">
    <ul className="text-gray-950 py-2 text-sm">
      <li><a href="#">Profile</a></li>
      <li><a href="#">Setting</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </div>
  </button>
</div>
      </div>

    </nav>
  )
}

export default Navbar