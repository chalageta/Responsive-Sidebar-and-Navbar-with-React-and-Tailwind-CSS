import '../../node_modules/font-awesome/css/font-awesome.css'
const Siderbar = ({SiderbarToggle}) => {
  return (
    <div className={` ${SiderbarToggle ? 'hidden' : 'block'} bg-gray-800 w-64 h-full fixed py-2 px-4`} >
      <div className='my-2 mb-4' >
        <h1 className='text-2xl text-white font-bold'>Admin Dashboard</h1>
      </div>
      <hr />
      <ul className='mt-2 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
           <a className='px-3'  href="">
          <i className="fa fa-home w-6 h-6 inline-block "></i>
            Home
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
           <a className='px-3'  href="">
          <i className="fa fa-list w-6 h-6 inline-block "></i>
            Departments
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
           <a className='px-3'  href="">
          <i className="fa fa-envelope w-6 h-6 inline-block "></i>
            Message
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
           <a className='px-3'  href="">
          <i className="fa fa-book w-6 h-6 inline-block "></i>
            Books
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
           <a className='px-3'  href="">
          <i className="fa fa-cog w-6 h-6 inline-block "></i>
            Setting
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Siderbar