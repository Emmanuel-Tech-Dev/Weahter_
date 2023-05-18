import {FiSun , FiSunset , FiSunrise , FiWind , FiCloud , FiCloudLightning} from 'react-icons/fi'
import {WiHumidity} from 'react-icons/wi'
import {BsCloudDrizzle} from 'react-icons/bs'
import {CgCodeClimate} from 'react-icons/cg'

const Stats = (props) => {
  return (
    <div>
      <div className="container w-[70%] m-auto mt-10 md:flex justify-between md:w-[90%] items-center ">
          <div className="content1 md:w-[40%]">
               <div className={!props.mode ? "flex justify-between border border-[#D3D9E8] bg-[#fff] text-[#020419] p-5 rounded-md md:w-full" : "humi flex justify-between border border-[#D3D9E8] bg-[#fff] text-[#020419] p-5 rounded-md md:w-full"}>
                      <div className="humi-left w-[50%] border-r border-r-[#D3D9E8]">
                        <div className="wrapper flex gap-3 items-center ">
                            <div className="icon">
                             <WiHumidity size={20}/>
                            </div>
                          <div className="text">
                            <h1>Humidity</h1>
                            <span className='font-bold text-[12px]'>{props.stats}%</span>
                          </div>
                        </div>
                        <div className="wrapper mt-5 flex gap-3 items-center">
                            <div className="icon">
                             <FiSun size={20}/>
                            </div>
                          <div className="text">
                            <h1>UV Index</h1>
                            <span className='font-bold text-[12px]'>{props.unIndex}</span>
                          </div>
                        </div>
                      
                          
                      </div>
                      <div className="humi-right">
                        <div className="wrapper flex gap-3 items-center ">
                            <div className="icon">
                             <FiSunrise size={20}/>
                            </div>
                          <div className="text">
                            <h1>Sunrise</h1>
                            <span className='font-bold text-[12px]'>{props.sunrise}</span>
                          </div>
                        </div>
                        <div className="wrapper mt-5 flex gap-3 items-center">
                            <div className="icon">
                             <FiSunset size={20}/>
                            </div>
                          <div className="text">
                            <h1>Sunset</h1>
                            <span className='font-bold text-[12px]'>{props.sunset}</span>
                          </div>
                      </div>
                      </div>
               </div>
               <div className={!props.mode ? "rainfall flex justify-between p-5 bg-[#D3D9E8] mt-5 rounded-md" : "rainfallDark flex justify-between p-5 bg-[#5091BA] text-[#020419] mt-5 rounded-md"}>
                   <div className="text">
                            <h1>Monthly Rainfall</h1>
                            <span className='font-bold text-[16px]'>45mm</span>
                          </div>
                   <div className="text">
                     <h1>This Year</h1>
                            <span className='font-bold text-[16px]'>+ 7%</span>
                   </div>
               </div>
          </div>
           <div className="data mt-5 mb-10 md:w-[50%]">
               <div className={!props.mode ? "stats border border-[#D3D9E8] bg-[#fff] text-[#020419] p-5 rounded-md" : "stats border border-[#D3D9E8] bg-[#fff] text-[#020419] p-5 rounded-md "}>
                    <h1>Temperature  &bull;  Precipitation  &bull;  Wind</h1>
                    <hr className=' m-auto h-[.5px] mt-2 border-none outline-none bg-[#D3D9E8]'/>
                  <div className="container flex mt-5 justify-between gap-2  items-center">
                     <div className="mon flex flex-col items-center   ">
                    <h1 className="text-[12px] mb-2">01 am</h1>
                    <h1 className='font-semibold py-2 text-[14px]'>Sunny</h1>
                    <FiSun size={20}/>
                    <h1 className='font-bold mt-2'>{props.unIndex}</h1>
                   </div> 
                    <div className="mon flex flex-col items-center   ">
                    <h1 className="text-[12px] mb-2">01 am</h1>
                    <h1 className='font-semibold py-2 text-[14px]'>Windy</h1>
                    <FiWind size={20}/>
                    <h1 className='font-bold mt-2'>{props.windy}°</h1>
                   </div>  <div className="mon flex flex-col items-center   ">
                    <h1 className="text-[12px] mb-2">01 am</h1>
                    <h1 className='font-semibold py-2 text-[14px]'>Condition</h1>
                   <CgCodeClimate size={20}/>
                    <h1 className='font-bold mt-2'>{props.clouds}</h1>
                   </div> 
                  
                       
                  </div>
                  
                  
               </div>
           </div>

      </div>
    </div>
  )
}

export default Stats
