import { useState } from "react"
import Card from "../components/Card"
import Showmore from "../components/Showmore"
import data from '../mockdata/MOCK_DATA'
const Main=()=>{
    const [amount,setAmount]=useState(18)
    const handleAmountDisplayed=()=>{
        setAmount(amount+12)
    }
  
    const dispData=data.splice(1,amount).map(items=><Card key={items.id} data={items} />)
    return(
        <div className="min-h-screen py-5 md:px-[5%]  md:pb-[13%] lg:pb-[5%] relative">
            <div className="md:grid md:grid-cols-3 lg:grid-cols-6">
                {dispData}
            </div>
            <Showmore AmountDisplayed={()=>handleAmountDisplayed()}/> 
        </div>
    )
}
export default Main