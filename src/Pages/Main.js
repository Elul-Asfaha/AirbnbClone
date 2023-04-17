import React from 'react'
import { useState } from "react"
import Showmore from "../components/Showmore"
import data from '../mockdata/MOCK_DATA'
import Loading from '../components/Loading'



const LazyCard=React.lazy(()=>import('../components/Card'))


const Main=()=>{
    const [amount,setAmount]=useState(18)
    const handleAmountDisplayed=()=>{
        setAmount(amount+12)
    }
    
    const dispData=data.map(items=><LazyCard key={items.id} data={items} />)
    return(
            <div className="min-h-screen py-5 md:px-[5%]  md:pb-[13%] lg:pb-[5%] relative">
                <div className="md:grid md:grid-cols-3 lg:grid-cols-6 gap-y-5">
                   <React.Suspense fallback={<Loading/>}>
                        {dispData}
                    </React.Suspense>
                </div>
                <Showmore AmountDisplayed={()=>handleAmountDisplayed()}/> 
            </div>

    )
}
export default Main