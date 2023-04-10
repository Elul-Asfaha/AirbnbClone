import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { provideData } from "../App"

const Filter=()=>{
    const data=useContext(provideData)
    return(
        <div className="absolute w-full top-0 bg-black/[30%]">
            <div className='mt-[20px] bg-white rounded-md'>
                <div className="flex justify-center relative px-5 py-3 border-b border-1">
                    <div className="absolute left-[5%]"><CloseIcon onClick={data.handleToggleFilter}/></div>
                    <p className="font-bold">Filters</p>
                </div>

                <div className="px-[5%] flex flex-col gap-5 border border-1 py-2">
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Price range</p>
                        <p>The average nightly price is $ 253 euro</p>
                        <div className="flex justify-center items-center gap-3">
                            <div className="flex flex-col border border-1 w-[40%] border border-2 border-black rounded-md py-1 px-2">
                                <p>min price</p>
                                <div className="flex gap-1">
                                    <p>$</p>
                                    <input type='number' className="w-full outline-none" placeholder="9"/>
                                </div>
                            </div>
                            <p>-</p>
                            <div className="flex flex-col border border-1  w-[40%] border border-2 border-black rounded-md py-1 px-2">
                                <p>max price</p>
                                <div className="flex gap-1">
                                    <p>$</p>
                                    <input type='number' className="w-full outline-none" placeholder="9"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-1"></div>

                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Type of place</p>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <p>Entire place</p>
                                <p >A place all to yourself</p>
                            </div>
                            <input type="checkbox" className="min-w-[25px] min-h-[25px]"/>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <p>Private room</p>
                                <p>Your own room in a home or a hotel, plus some shared common spaces</p>
                            </div>
                            <input type="checkbox" className="min-w-[25px] min-h-[25px]"/>
                        </div>
                    </div>

                    <div className="border-b border-1"></div>
                    
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Room and beds</p>
                        <div className=" flex flex-col gap-5">
                            <p className="font-bold">Bedrooms</p>
                            <div className="overflow-x-auto scrollbar-hide">
                                <ul className="flex gap-5">
                                    <li className="py-3 px-5 bg-black text-white rounded-full">Any</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">1</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">2</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">3</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">4</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">5</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">6</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">7</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">8+</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5">
                            <p className="font-bold">Beds</p>
                            <div className="overflow-x-auto scrollbar-hide">
                                <ul className="flex gap-5">
                                    <li className="py-3 px-5 bg-black text-white rounded-full">Any</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">1</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">2</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">3</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">4</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">5</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">6</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">7</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">8+</li>
                                </ul>
                            </div>
                        </div>
                        <div  className=" flex flex-col gap-5">
                            <p className="font-bold">Bathrooms</p>
                            <div className="overflow-x-auto scrollbar-hide">
                                <ul className="flex gap-5">
                                    <li className="py-3 px-5 bg-black text-white rounded-full">Any</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">1</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">2</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">3</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">4</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">5</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">6</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">7</li>
                                    <li className="py-3 px-5 border border-1 rounded-full">8+</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-1"></div>
                    
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Property type</p>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="border border-1 rounded-xl min-h-[100px] p-5 flex flex-col justify-between">
                                    <div>h</div>
                                    <p>Home</p>
                                </div>
                                <div className="border border-1 rounded-xl  min-h-[100px] p-5 flex flex-col justify-between">
                                    <div>A</div>
                                    <p>Apartment</p>
                                </div>
                                <div className="border border-1 rounded-xl  min-h-[100px] p-5 flex flex-col justify-between">
                                    <div>g</div>
                                    <p>Guesthouse</p>
                                </div>
                                <div className="border border-1 rounded-xl  min-h-[100px] p-5 flex flex-col justify-between">
                                    <div>h</div>
                                    <p>Hotel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-1"></div>
                    
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Anemities</p>
                        <p className="font-bold">Essentias</p>
                        <div className="flex justify-between">
                            <p>Wifi</p>
                            <input type="checkbox" className="min-w-[25px]"/>
                        </div>
                        <div className="flex justify-between">
                            <p>Kitchen</p><input type="checkbox" className="min-w-[25px]"/>
                        </div>
                        <p className="font-bold underline">Show more</p>
                    </div>

                    <div className="border-b border-1"></div>
                    
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Bookning options</p>
                        <div >
                            <p>Instant Book</p>
                            <div className='flex justify-between'>
                                <p className='max-w-[85%]'>Listings you can book without waiting for Host approval</p>
                                <input
                                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault" />
                            </div>
                        </div>
                        <div>
                            <p>Self check-in</p>
                            <div className='flex justify-between'>
                                <p>Easy access to the property once you arrive</p>
                                <input
                                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault" />
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-1"></div>
                    
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Accessibility features</p>
                        <p className="font-bold">Guest entrance and parking</p>
                        <div className="flex justify-between">
                            <p>Step-free guest entrance</p>
                            <input type="checkbox" className="min-w-[25px]"/>
                        </div>
                        <div className="flex justify-between">
                            <p>Guest entrance wider than 32 inches</p>
                            <input type="checkbox" className="min-w-[25px]"/>
                        </div>
                        <p className="font-bold underline">Show more</p>
                    </div>

                    <div className="border-b border-1"></div>
                    
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Top tier stays</p>
                        <div>
                            <div className="flex justify-between">
                                <div>
                                    <p>Superhost</p>
                                    <p>Stay with recognized Hosts</p>
                                </div>
                                <input
                                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault" />
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>Airbnb Plus</p>
                                    <p>Every Plus home is reviewed for quality</p>
                                </div>
                                <input
                                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault" />
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-1"></div>
                    
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Host language</p>
                        <div className="flex justify-between">
                            <div>English</div>
                            <input type="checkbox" className="min-w-[25px]"/>
                        </div>
                        <div className="flex justify-between">
                            <div>French</div>
                            <input type="checkbox" className="min-w-[25px]"/>
                        </div>
                        <div className="flex justify-between">
                            <div>German</div>
                            <input type="checkbox" className="min-w-[25px]"/>
                        </div>
                        <p className="underline font-bold">Show more</p>
                    </div>
                </div>

                <div className="px-[5%] flex justify-between items-center py-3 px-4">
                    <p className="font-bold underline">Clear all</p>
                    <p className="text-white bg-black dark:text-black dark:bg-white rounded-lg py-3 px-5">Show 666 stays</p>
                </div>
            </div>
        </div>
    )
}
export default Filter