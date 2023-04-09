import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RocketIcon from '@mui/icons-material/Rocket';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CottageIcon from '@mui/icons-material/Cottage';
import SingleBedIcon from '@mui/icons-material/SingleBed';
const Nav=()=>{
    return(
        <div className="flex items-center lg:justify-between md:py-4 px-[5%] border border-1 overflow-hidden">
            <div className="basis-3/12 hidden md:block"> 
                logo
            </div>

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
                <div className='hover:bg-gray-100 p-3 rounded-full'>
                    Airbnb your home
                </div>
                <div className='hover:bg-gray-100 p-3 rounded-full'>
                    <LanguageIcon/>
                </div>
                <div className='flex justify-evenly rounded-full border border-1 gap-3 px-1 py-2 hover:shadow hover:shadow cursor-pointer'>
                    <MenuIcon/>
                    <AccountCircleIcon/>
                </div>
            </div>

            {/* {mobile version} */}
            <div className='w-full md:hidden'>
                <div className='mx-auto my-3 flex items-center justify-between  gap-3 border border-1 rounded-full shadow px-3 overflow-x-auto'> 
                    <SearchIcon className='px-1' style={{fontSize: '35px'}}/>
                    <div className='flex flex-col basis-8/12'> 
                        <p className='font-semibold'>Anywhere</p>
                        <div className='flex'>
                            <p>Any week</p>
                            .
                            <p>
                                Add guests
                            </p>
                        </div>
                    </div>
                    <SearchIcon  className='px-1 border border-1 rounded-full' style={{fontSize: '35px'}}/>
                </div>

                <div className='flex gap-4 text-sm overflow-x-scroll scrollbar-hide w-auto break-normal'>

                    <div className='flex flex-col items-center justify-center'>
                        <RocketIcon />
                        <div>
                            OMG!
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <CoffeeIcon/>
                        <div>
                            Bed & breakfasts
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <CottageIcon/>
                        <div>
                            Earth homes
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <SingleBedIcon/>
                        <div>
                            Private rooms
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Nav
