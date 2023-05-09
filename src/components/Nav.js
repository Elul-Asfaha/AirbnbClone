
import materialUiImports from './imports/materialUiImports';
import { provideData } from "../App"
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    const providedData = useContext(provideData)
    const [dispUser, setDispUser] = useState(false)

    return (
        <div className="sticky top-0 z-40  bg-white dark:bg-black bg:text-white overflow-hidden border-b border-1">
            <div className='absolute inset-0 h-[30px]'>
                Wishlist ({providedData.favorite.length})
            </div>
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
                        <materialUiImports.SearchIcon className='rounded-full p-2 bg-red-600 text-white' style={{ fontSize: '32px', fontWeight: 'bold' }} />
                    </div>
                </div>

                <div className="basis-4/12 hidden md:flex lg:basis-4/12 xl:basis-3/12 justify-between items-center gap-1 cursor-pointer">
                    <div className='dark:hover:bg-gray-700 hover:bg-gray-100 p-3 rounded-full text-center'>
                        Airbnb your home
                    </div>
                    <div className='dark:hover:bg-gray-700 hover:bg-gray-100 p-3 rounded-full'>
                        <materialUiImports.LanguageIcon />
                    </div>
                    <div className='flex relative justify-evenly rounded-full border border-1 gap-3 px-1 py-2 hover:shadow hover:shadow-1 cursor-pointer' onClick={() => setDispUser(!dispUser)}>
                        <materialUiImports.MenuIcon />
                        <materialUiImports.AccountCircleIcon />
                        {
                            dispUser &&
                            <div className="fixed flex flex-col md:top-20 right-[5%] w-[200px] py-1 bg-white dark:bg-black dark:text-white shadow rounded-xl gap-2">
                                <Link to='#' className="py-2 pl-2 hover:bg-gray-200">
                                    Login
                                </Link>
                                <Link to='#' className="py-2 pl-2 hover:bg-gray-200">
                                    Sign up
                                </Link>
                                <div className='border-t border-1 ' />
                                <Link to='#' className="py-2 pl-2 hover:bg-gray-200">
                                    Air bnb your home
                                </Link>
                                <Link to='#' className="py-2 pl-2 hover:bg-gray-200">
                                    Help
                                </Link>
                            </div>
                        }
                    </div>
                </div>


            </div>
            <div className='hidden md:flex gap-5 justify-between items-center'>
                <div className='flex gap-[30px] text-sm overflow-x-scroll overflow-y-hidden scrollbar-hide break-normal w-[85%]'>

                    <Link to="/" onClick={() => providedData.setPropertyType(0)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 0 && "border-b-2 border-black"}`}>
                        <materialUiImports.RocketIcon />
                        <div>
                            OMG!
                        </div>
                    </Link>
                    <Link to="/" onClick={() => providedData.setPropertyType(1)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 1 && "border-b-2 border-black"}`}>
                        <materialUiImports.CoffeeIcon />
                        <div>
                            Bed & breakfasts
                        </div>
                    </Link>
                    <Link to="/" onClick={() => providedData.setPropertyType(2)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 2 && "border-b-2 border-black"}`}>
                        <materialUiImports.CottageIcon />
                        <div>
                            Earth homes
                        </div>
                    </Link>
                    <Link to="/" onClick={() => providedData.setPropertyType(3)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 3 && "border-b-2 border-black"}`}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>
                    <Link to="/" onClick={() => providedData.setPropertyType(4)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 4 && "border-b-2 border-black"}`}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>

                    <Link to="/" onClick={() => providedData.setPropertyType(5)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 5 && "border-b-2 border-black"}`}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>
                    <Link to="/" onClick={() => providedData.setPropertyType(6)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 6 && "border-b-2 border-black"}`}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>
                    <Link to="/" onClick={() => providedData.setPropertyType(7)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 7 && "border-b-2 border-black"}`}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>

                    <Link to="/" onClick={() => providedData.setPropertyType(8)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 8 && "border-b-2 border-black"}`}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>
                    <Link to="/" onClick={() => providedData.setPropertyType(9)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 9 && "border-b-2 border-black"}`}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>
                    <Link to="/" onClick={() => providedData.setPropertyType(10)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 10 && "border-b-2 border-black"}`}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>
                    <Link to="/" onClick={() => providedData.setPropertyType(11)} className={`flex flex-col items-center justify-center ${providedData.propertyType === 11 && "border-b-2 border-black"}`}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>

                </div>
                <button className='flex border border-1 max-h-[80px] items-center gap-2 rounded-xl p-2' onClick={providedData.handleToggleFilter}>
                    <materialUiImports.FilterAltIcon className='rounded-full' style={{ fontSize: '25px' }} />
                    Filters
                </button>
            </div>

            {/* {mobile version} */}
            <div className='w-full md:hidden'>
                <div className='mx-auto my-3 py-1 flex items-center justify-between  gap-3 border border-1 rounded-full shadow px-3 overflow-x-auto'>
                    <materialUiImports.SearchIcon className='px-1' style={{ fontSize: '35px' }} />
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
                    <materialUiImports.FilterAltIcon onClick={providedData.handleToggleFilter} className='px-1 border border-1 rounded-full' style={{ fontSize: '35px' }} />
                </div>

                <div className='flex gap-4 text-sm overflow-x-scroll scrollbar-hide w-auto break-normal'>

                    <Link to="/" className='flex flex-col items-center justify-center' onClick={() => providedData.setPropertyType(0)}>
                        <materialUiImports.RocketIcon />
                        <div>
                            OMG!
                        </div>
                    </Link>
                    <Link to="/" className='flex flex-col items-center justify-center' onClick={() => providedData.setPropertyType(1)}>
                        <materialUiImports.CoffeeIcon />
                        <div>
                            Bed & breakfasts
                        </div>
                    </Link>
                    <Link to="/" className='flex flex-col items-center justify-center' onClick={() => providedData.setPropertyType(2)}>
                        <materialUiImports.CottageIcon />
                        <div>
                            Earth homes
                        </div>
                    </Link>
                    <Link to="/" className='flex flex-col items-center justify-center' onClick={() => providedData.setPropertyType(3)}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>
                    <Link to="/" className='flex flex-col items-center justify-center' onClick={() => providedData.setPropertyType(4)}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>

                    <Link to="/" className='flex flex-col items-center justify-center' onClick={() => providedData.setPropertyType(5)}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>
                    <Link to="/" className='flex flex-col items-center justify-center' onClick={() => providedData.setPropertyType(6)}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>
                    <Link to="/" className='flex flex-col items-center justify-center' onClick={() => providedData.setPropertyType(7)}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>

                    <Link to="/" className='flex flex-col items-center justify-center' onClick={() => providedData.setPropertyType(8)}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>
                    <Link to="/" className='flex flex-col items-center justify-center' onClick={() => providedData.setPropertyType(9)}>
                        <materialUiImports.SingleBedIcon />
                        <div>
                            Private rooms
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Nav
