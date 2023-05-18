
import {FiSearch} from 'react-icons/fi'
import {MdDarkMode} from 'react-icons/md'
import {CiLight} from 'react-icons/ci'



const NavBar = ({handleChange , handleClick , darkmode , mode}) => {
  return (
    <div>
      
      <header className='p-5'>
         <nav className='flex justify-between items-center md:px-14'>
            <label className={!mode ? 'font-bold text-2xl ' : 'font-bold text-2xl text-[#fefe]'}>SEIN</label>
                       
<div className="wrapper flex gap-5">
   <div className="container border border-[#97A1BC] rounded flex px-3 gap-3 py-1.5">
                   <input type='text'  placeholder='Enter city name' onChange={handleChange} className='outline-none bg-transparent w-[100%]' /> 
                  <button onClick={handleClick} ><FiSearch size={20} color='#707B99'/></button>
              
              
                </div>
  <button onClick={darkmode}>
              {!mode ?  <CiLight size={20}/> : <MdDarkMode color='#fefe' size={20}/>}
              </button>   
           
</div>
    
          
         </nav>
      </header>

    </div>
  )
}

export default NavBar
