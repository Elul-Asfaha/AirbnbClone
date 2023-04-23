import React, {  useContext } from 'react'
// import { useState } from "react"
// import Showmore from "../components/Showmore"
import data from '../mockdata/MOCK_DATA'
import Card from '../components/Card'
import { provideData } from '../App'



        
const Main=()=>{
    const providedData=useContext(provideData)
    // const [amount,setAmount]=useState(18)
    // const handleAmountDisplayed=()=>{
    //     setAmount(amount+12)
    // } 
    // this function is used to determine how many properties need to be displayed.
    // the above funtion is currently disabled

    const dispData=providedData.propertyType!==0?
    data.filter(item=>
        item.PropertyType===providedData.propertyType &&
        item.Superhost>=providedData.currentFilter.superhost && 
        item.Guests>=providedData.currentFilter.entirePlace && 
        item.BedNo>=providedData.currentFilter.bedNo && 
        item.BedRooms>=providedData.currentFilter.roomNo && 
        item.BathNo>=providedData.currentFilter.bathRooms
        ).map(item=><Card id={item.id} key={item.id} data={item} />):
    data.filter(item=> 
        item.PropertyType!==providedData.propertyType &&
        item.Superhost>=providedData.currentFilter.superhost && 
        item.Guests>=providedData.currentFilter.entirePlace && 
        item.BedNo>=providedData.currentFilter.bedNo && 
        item.BedRooms>=providedData.currentFilter.roomNo && 
        item.BathNo>=providedData.currentFilter.bathRooms)
        .map(item=><Card key={item.id} data={item} />)
    
        const dispEmpty=<div className='flex justify-center text-center underline'>
            oops! we couldnt find any matches. 
        </div> 
    return(
            <div className="min-h-screen py-5 md:px-[5%] md:pb-[13%] lg:pb-[5%] relative">
                <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {
                    dispData.length!==0 && dispData}
                    {
                    dispData.length ===0 && dispEmpty
                    }
                    
                </div>
                {/* <Showmore AmountDisplayed={()=>handleAmountDisplayed()}/>  */}
            </div>

    )
}
export default Main