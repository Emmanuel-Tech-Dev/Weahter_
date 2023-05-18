import {BsCloudDrizzle} from 'react-icons/bs'

const Hero = ({location , temperature , sunrise ,  currentDay , country , mode}) => {
  return (
    <div>
      
      <div className={ !mode ? "container w-[90%] m-auto bg-hero bg-cover bg-center rounded-md p-5 mt-10" : "container w-[90%] m-auto bg-darkMode text-[#fefe] bg-cover bg-center rounded-md p-5 mt-10"}>
       
       <div className="content flex items-baseline p-5 pt-10 justify-between backdrop-blur-l rounded-sm bg-white/8">
           <div className="temp">
            { !mode ? <BsCloudDrizzle size={60} color="#02041990"/> : <BsCloudDrizzle size={60} color="#D9D9D9"/> }  
              <h1 className='text-5xl py-2'>{temperature}°C</h1>
              <h2 className='text-[20px]'>{location} , {country}</h2>
           </div>
           <div className="t-d text-right  ">
                <h1 className='font-bold py-2 text-[24px]'>{sunrise}</h1>
                <h2 className='text-[20px]'>Sunset Time, {currentDay}</h2>
           </div>
       </div>
      </div>


    </div>
  )
}

export default Hero
