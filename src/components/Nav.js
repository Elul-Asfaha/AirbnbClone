import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RocketIcon from '@mui/icons-material/Rocket';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CottageIcon from '@mui/icons-material/Cottage';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { provideData } from "../App"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Nav=()=>{
    const data=useContext(provideData)
    
    return(
        <div className="sticky top-0 z-40  bg-white dark:bg-black bg:text-white overflow-hidden border-b border-1  px-[5%]">
            <div className='flex items-center lg:justify-between md:py-4'>
                <Link to='/' className="basis-3/12 hidden md:block"> 
                    logo
                </Link>
                
                <div className="hidden md:basis-5/12 lg:basis-3/12 md:flex justify-between items-center gap-5 border border-1 rouneded hover:shadow rounded-full py-1 pl-5 px-1 font-semibold cursor-pointer">
                    <div>
                        Anywhere
                    </div>
                    <div>
                        Any week
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='outline-none max-w-[160px] font-normal text-gray-500'>
                            Add guests
                        </p>
                        <SearchIcon className='rounded-full p-2 bg-red-600 text-white' style={{fontSize:'32px',fontWeight:'bold'}}/>
                    </div>
                </div>

                <div className="basis-4/12 hidden md:flex lg:basis-2/12 justify-between items-center gap-1 cursor-pointer">
                    <div className='dark:hover:bg-gray-700 hover:bg-gray-100 p-3 rounded-full'>
                        Airbnb your home
                    </div>
                    <div className='dark:hover:bg-gray-700 hover:bg-gray-100 p-3 rounded-full'>
                        <LanguageIcon/>
                    </div>
                    <div className='flex justify-evenly rounded-full border border-1 gap-3 px-1 py-2 hover:shadow hover:shadow cursor-pointer'>
                        <MenuIcon/>
                        <AccountCircleIcon/>
                    </div>
                </div>
                
            </div>
            <div className='hidden md:flex gap-5 justify-between items-center'>
               <div className='flex gap-[30px] text-sm overflow-x-scroll overflow-y-hidden scrollbar-hide w-auto break-normal w-[85%]'>

                    <button onClick={()=>data.setPropertyType(1)} className='flex flex-col items-center justify-center'>
                        <RocketIcon />
                        <div>
                            OMG!
                        </div>
                    </button>
                    <button onClick={()=>data.setPropertyType(2)} className='flex flex-col items-center justify-center'>
                        <CoffeeIcon/>
                        <div>
                            Bed & breakfasts
                        </div>
                    </button>
                    <button onClick={()=>data.setPropertyType(3)} className='flex flex-col items-center justify-center'>
                        <CottageIcon/>
                        <div>
                            Earth homes
                        </div>
                    </button>
                    <button onClick={()=>data.setPropertyType(4)} className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    <button onClick={()=>data.setPropertyType(5)} className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>

                    <button onClick={()=>data.setPropertyType(5)} className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    <button onClick={()=>data.setPropertyType(6)} className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    <button onClick={()=>data.setPropertyType(7)} className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>

                    <button onClick={()=>data.setPropertyType(8)} className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    <button onClick={()=>data.setPropertyType(9)} className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    <button onClick={()=>data.setPropertyType(9)} className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    <button onClick={()=>data.setPropertyType(10)} className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    
                </div>
                <button className='flex border border-1 max-h-[80px] items-center gap-2 rounded-xl p-2' onClick={data.handleToggleFilter}>
                    <FilterAltIcon  className='rounded-full' style={{fontSize: '25px'}}/>
                    Filters 
                </button>
            </div>
            
            {/* {mobile version} */}
            <div className='w-full md:hidden'>
                <div className='mx-auto my-3 py-1 flex items-center justify-between  gap-3 border border-1 rounded-full shadow px-3 overflow-x-auto'> 
                    <SearchIcon className='px-1' style={{fontSize: '35px'}}/>
                    <div className='flex flex-col basis-8/12'> 
                        <p className='font-semibold'>Anywhere</p>
                        <div className='flex gap-1 text-[14px]'>
                            <p>Any week</p>
                            .
                            <p>
                                Add guests
                            </p>
                        </div>
                    </div>
                    <FilterAltIcon  onClick={data.handleToggleFilter} className='px-1 border border-1 rounded-full' style={{fontSize: '35px'}}/>
                </div>

                <div className='flex gap-4 text-sm overflow-x-scroll scrollbar-hide w-auto break-normal'>

                    <button className='flex flex-col items-center justify-center' onClick={()=>data.setPropertyType(1)}>
                        <RocketIcon />
                        <div>
                            OMG!
                        </div>
                    </button>
                    <button className='flex flex-col items-center justify-center' onClick={()=>data.setPropertyType(2)}>
                        <CoffeeIcon/>
                        <div>
                            Bed & breakfasts
                        </div>
                    </button>
                    <button className='flex flex-col items-center justify-center' onClick={()=>data.setPropertyType(3)}>
                        <CottageIcon/>
                        <div>
                            Earth homes
                        </div>
                    </button>
                    <button className='flex flex-col items-center justify-center' onClick={()=>data.setPropertyType(4)}>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    <button className='flex flex-col items-center justify-center' onClick={()=>data.setPropertyType(5)}>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>

                    <button className='flex flex-col items-center justify-center' onClick={()=>data.setPropertyType(6)}>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    <button className='flex flex-col items-center justify-center' onClick={()=>data.setPropertyType(7)}>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    <button className='flex flex-col items-center justify-center' onClick={()=>data.setPropertyType(8)}>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>

                    <button className='flex flex-col items-center justify-center' onClick={()=>data.setPropertyType(9)}>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>
                    <button className='flex flex-col items-center justify-center' onClick={()=>data.setPropertyType(10)}>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Nav
