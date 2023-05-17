
import {FiSearch} from 'react-icons/fi'

const NavBar = (props) => {
  return (
    <div>
      
      <header className='p-5'>
         <nav className='flex justify-between items-center md:px-14'>
            <label className='font-bold text-2xl'>SEIN</label>
                       

     <div className="container border border-[#97A1BC] rounded flex px-3 gap-3 py-1.5 max-w-[40%] md:max-w-[20%]">
                   <input type='text'  placeholder='Enter city name' onChange={props.handleChange} className='outline-none bg-transparent w-[100%]' /> 
                  <button onClick={props.handleClick} ><FiSearch size={20} color='#707B99'/></button>
                </div>

               
           
         </nav>
      </header>

    </div>
  )
}

export default NavBar
