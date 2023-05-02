import React, {  useContext } from 'react'
// import { useState } from "react"
// import Showmore from "../components/Showmore"
import { provideData } from '../App'
import Nav from '../components/Nav'



        
const Main=()=>{
    const providedData=useContext(provideData)
    // const [amount,setAmount]=useState(18)
    // const handleAmountDisplayed=()=>{
    //     setAmount(amount+12)
    // } 
    // this function is used to determine how many properties need to be displayed.
    // the above funtion is currently disabled

       const dispEmpty=<div className='flex justify-center text-center underline w-full'>
            oops! we couldnt find any matches. 
        </div> 
    return(
            <>
                <Nav/>
                <div className="min-h-screen py-5 md:px-[5%] md:pb-[13%] lg:pb-[5%] relative">
                    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-5">
                        {
                        providedData.dispData.length!==0 && providedData.dispData}
                        {
                        providedData.dispData.length ===0 && dispEmpty
                        }
                        
                    </div>
                    {/* <Showmore AmountDisplayed={()=>handleAmountDisplayed()}/>  */}
                </div>
            </>
    )
}
export default Main