import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LanguageIcon from '@mui/icons-material/Language';

const Footer=()=>{
    return(
        <div className="md:absolute bottom-0 px-[5%] dark:bg-black dark:text-white bg-gray-100 w-full border-t border-1">
            <div className='hidden md:flex justify-between py-5'>
                <div className='basis-7/12 '>
                    <ul className=' flex flex-wrap gap-x-2'>
                        <li>
                        @ 2023 Airbnb,Inc.
                        </li>
                        <li className='cursor-pointer hover:underline'>
                            Terms
                        </li>
                        <li className='cursor-pointer hover:underline'>
                            Sitemap
                        </li>
                        <li className='cursor-pointer hover:underline'> 
                            privacy
                        </li>
                        <li className='cursor-pointer hover:underline'>
                            Your Privacy Choices
                        </li>
                        <li className='cursor-pointer hover:underline'>
                            Destinations
                        </li>
                    </ul>
                </div>
                <div className='basis-5/12 flex items-center justify-end'>
                    <ul className='flex gap-2'>
                        <li className='flex items-center hover:underline cursor-pointer'>
                            <LanguageIcon/>
                            <p>
                                English (US)
                            </p>
                        </li>
                        <li className='hover:underline cursor-pointer'>
                            Eur
                        </li>
                        <li className='flex items-center justify-center lg:justify-end cursor-pointer'>
                            <p className='underline'>
                                Support & resources
                            </p>
                            <KeyboardArrowUpIcon/>
                        </li>
                    </ul>
                </div>
            </div>


            {/* {mobile version} */}
            <div className='md:hidden pt-5 pb-3'>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold'>Support</p>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            Help Center
                        </li>
                        
                        <li>
                            AirCover
                        </li>
                        
                        <li>
                            Supporting people with disabilities 
                        </li>
                        
                        <li>
                            Cancellation options
                        </li>
                        
                        <li>
                            Our COVID-19 Response
                        </li>
                        
                        <li>
                            Report a neighborhood concern
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 mt-3'>
                    <p className='font-bold'>Community</p>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            Airbnb.org: disaster relief housing
                        </li>
                        
                        <li>
                            Combaitng discrimination
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 mt-3'>
                    <p className='font-bold'>Hosting</p>
                    <ul className='flex flex-col gap-3'>
                        <li>
                           Airbnb your home
                        </li>
                        
                        <li>
                            AirCover for Hosts
                        </li>
                        
                        <li>
                            Explore hosting resources
                        </li>
                        
                        <li>
                            Visit our community forum 
                        </li>
                        
                        <li>
                            How to host responsibly
                        </li>
                        
                        <li>
                            Airbnb-friendly apartments
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 mt-3'>
                    <p className='font-bold'>Airbnb</p>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            Newsroom
                        </li>
                        
                        <li>
                            Learn about new features
                        </li>
                        
                        <li>
                            Letter from our founders 
                        </li>
                        
                        <li>
                            Careers
                        </li>
                        
                        <li>
                            Investors
                        </li>
                        
                        <li>
                            Gift Cards
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 mt-3'>
                    <ul className='flex gap-2 font-semibold'>
                            <li className='flex items-center'>
                                <LanguageIcon/>
                                <p>
                                    English (US)
                                </p>
                            </li>
                            <li>
                                Eur
                            </li>
                    </ul>
                    <div className='flex flex-col'>
                        <p>@2023 Airbnb, Inc.</p>
                        <ul className='flex flex-wrap gap-x-2 max-w-[50%]'>
                            <li>Terms</li>
                            <li>Sitemap</li>
                            <li>Privacy</li>
                            <li>Your Privacy Choices</li> 
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Footer