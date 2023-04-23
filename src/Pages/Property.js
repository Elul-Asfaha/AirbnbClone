import materialUiImports from '../components/imports/materialUiImports';
import { useEffect } from 'react';
import data from '../mockdata/MOCK_DATA';
import { useParams } from 'react-router-dom';

const Property=()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const {id}=useParams()
    const details=data.filter(items=>items.id===Number(id))
    return(
            <div id={id && id} className="min-h-screen flex flex-col gap-5 py-5 md:px-[5%] lg:px-[10%] xl:px-[15%] md:pb-[13%] lg:pb-[5%] relative">

                <div className="flex flex-col justify-evenly gap-5 px-2">
                    <h2 className="flex text-3xl">Blue Horizon Villa Anatoli, 1BD, private pool</h2>
                    <div className="flex flex-wrap justify-between">
                        <div className="flex flex-wrap gap-3">
                            <p className='flex items-center'>
                                <materialUiImports.StarIcon/>
                                {details[0].Rating && details[0].Rating}
                            </p>
                            <div className="flex font-bold underline">{details[0].Reviews && details[0].Reviews } reviews</div>
                            {details[0].Superhost && 
                            <div className='flex items-center justify-center'><materialUiImports.PriorityHighIcon/>Superhost  </div>
                            }
                            <div className="flex font-bold underline">
                                <p>{details[0].City && details[0].City},<span> {details[0].Country && details[0].Country}</span></p>
                            </div>
                        </div>
                        <div className="gap-3 hidden md:flex">
                            <p className="font-bold underline">share</p>
                            <p className="font-bold underline">save</p>
                        </div>
                    </div>
                </div>

                <div className="flex md:grid md:grid-cols-2 md:gap-x-4 justify-center md:rounded-xl max-h-[500px] overflow-hidden">
                    <div className="flex"><img src={details[0].Image && details[0].Image} alt="" className="cover"/>
                    </div>
                    <div className="hidden md:grid md:grid-cols-2 gap-2 max-h-[500px]">
                        <div className="flex">
                            <img src={details[0].Image && details[0].Image}  alt="" className="cover"/>
                        </div>
                        <div className="flex">
                            <img src={details[0].Image && details[0].Image}  alt="" className="cover"/>
                        </div>
                        <div className="flex">
                            <img src={details[0].Image && details[0].Image}  alt="" className="cover"/>
                        </div>
                        <div className="flex">
                            <img src={details[0].Image && details[0].Image}  alt="" className="cover"/>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 justify-center md:justify-between" >
                    <div className="basis-10/12 md:basis-7/12 flex flex-col">
                       
                        <div className="border-b border-1 pb-4">
                            <div  className="flex justify-between">
                                <p className="font-bold max-w-[300px]">Earthen home hosted by {details[0].Name && details[0].Name}</p>
                                <div className='w-[50px] h-[50px] flex'>{
                                    details[0].Profile?
                                    <img src={details[0].Profile} alt="" className='container rounded-full'/>
                                    :<materialUiImports.AccountCircleIcon style={{fontSize:'50px'}}/>
                                    }
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <p>2 guests.</p>
                                <p>{details[0].BedRooms && details[0].BedRooms } bedroom</p>
                                <p>{details[0].BedNo && details[0].BedNo } bed</p>
                                <p>{details[0].BathNo && details[0].BathNo } bath rooms</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-5 py-5 border-b border-1 pb-4">
                            <div className="flex gap-5">
                                <div><materialUiImports.FeaturedPlayListIcon/></div>
                                <div>
                                    <p className='font-semibold'>Featured in</p>
                                    <p className='text-gray-500'>Conde nast traverler, june 2021</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div><materialUiImports.KeyIcon  className='rotate-45'/></div>
                                <div>
                                    <p className='font-semibold'>Great check-in experience</p>
                                    <p className='text-gray-500'>90% of recent guests gave the check-in process a 5-star rating.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className=''><materialUiImports.EditCalendarIcon/></div>
                                <div>
                                    <p className='font-semibold'>Free cancellation before Apr 30.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-5 border-b border-1 pb-4">
                            <img src={materialUiImports.AirCover} width='200px' alt=''/>
                            <div>
                                Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                            </div>
                            <p className='font-bold underline'>
                                Learn More
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 py-5 border-b border-1 pb-4">
                            <p className='text-3xl'>What this place offers</p>
                            <ul className='flex flex-col lg:grid lg:grid-cols-2 gap-3'>
                                <li className='flex gap-5'>
                                    <div><materialUiImports.WifiIcon/></div>
                                    <div>Wifi</div>
                                </li>
                                <li className='flex gap-5'> 
                                    <div><materialUiImports.LocalParkingIcon/></div> 
                                    <div>Free parking on premises</div>
                                </li>
                                <li className='flex gap-5'> 
                                    <div><materialUiImports.HotTubIcon/></div> 
                                    <div>Private hot tub - available all year</div>
                                </li>
                                <li className='flex gap-5'> 
                                    <div><materialUiImports.AcUnitIcon/></div> 
                                    <div>Central air conditioning</div>
                                </li>
                                <li className='flex gap-5'> 
                                    <div><materialUiImports.BathtubIcon/></div> 
                                    <div>Bathtub</div>
                                </li>
                                <li className='flex gap-5'> 
                                    <div><materialUiImports.NotificationsIcon/></div> 
                                    <div>Carbon monoxide alarm</div>
                                </li>
                                <li className='flex gap-5'> 
                                    <div><materialUiImports.AddAlertIcon/></div> 
                                    <div>Smoke alarm</div>
                                </li>
                            </ul>
                            <p className='rounded-xl text-bold p-5 border border-2 border-black w-[50%] cursor-pointer text-center w-full max-w-[300px]'>Show all 35 amenities</p>
                        </div>

                        
                        <div className="flex flex-col gap-5 py-5 border-b border-1 pb-4">
                            <p className='text-3xl'>Accessibility features</p>
                            <p>This info was provided by the Host and reviewed by Airbnb.</p>
                            <div className='w-[70%]'>
                                <img src='' alt='' className='rounded-lg' /> 
                                <p className='font-bold'>
                                    Guest entrance and parking
                                </p>
                                <p>Lit path to the guest entrance</p>
                            </div>
                            <p className='rounded-xl text-bold p-5 border border-2 border-black w-[60%] cursor-pointer text-center w-full max-w-[300px]'>Show all 35 feature details</p>

                        </div>

                    </div>

                    <div className="basis-4/12 relative hidden md:block">
                        <div className="sticky top-10 ">
                            <div className='rounded-lg shadow shadow-xl border border-1 min-h-[300px] flex flex-col gap-5 px-3 py-5'>
                                <div className='flex flex-wrap justify-between'>
                                    <p><span className='font-bold'>$ {details[0].Price && details[0].Price}</span> night</p>
                                    <div className='flex gap-2 items-center'>
                                        <div className='flex'>
                                            <materialUiImports.StarIcon/>
                                            <p>
                                                {details[0].Rating && details[0].Rating }
                                            </p>
                                        </div>
                                        <div className='border border-black border-1 h-[1px] w-[1px]'/>
                                        <p className='underline'>
                                        {details[0].Reviews && details[0].Reviews}
                                        {' '}
                                            reviews
                                        </p>
                                    </div>
                                    
                                </div>
                                <div className='grid grid-rows-2 border border-1 rounded-md'>
                                    <div className='flex border border-1 border-black rounded-md'>
                                        <div className='flex-1 p-2 border-r border-1'>Check-in</div>
                                        <div className='flex-1 p-2'>Checkout</div>
                                    </div>
                                    <div className='border border-1 rounded-md'>Guests</div>
                                </div>
                                <button className='bg-purple-700 text-white py-2 px-5 rounded-lg'>Reserve</button>
                                <div>
                                    <div className='flex justify-between'>
                                        <p>$ {details[0].Price && details[0].Price} X 3 nights</p>
                                        <p>$50</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Cleaning fee</p>
                                        <p>$75</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Airbnb service fee</p>
                                        <p>$90</p>
                                    </div>
                                </div>
                                <div className='font-bold flex justify-between pt-5 border-t border-1'>
                                    <p>Total</p>
                                    <p>$ {details[0].Price && details[0].Price*3+(90+50+75)}</p>
                                </div>
                            </div>
                            <div className='flex sticky top-0 mt-5 justify-center items-center gap-2'>
                                <materialUiImports.FlagIcon/>
                                <p className='text-gray-400 underline'>Report this listing</p>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
    )
}
export default Property