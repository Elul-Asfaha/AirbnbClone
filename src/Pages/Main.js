import React, { useContext, useState } from 'react'
import Showmore from "../components/Showmore"
import { provideData } from '../App'
import Nav from '../components/Nav'




const Main = () => {
    const providedData = useContext(provideData)
    const [amount, setAmount] = useState(18)
    const handleAmountDisplayed = () => {
        setAmount(amount + 18)
    }

    const dispEmpty = <div className='flex justify-center text-center underline w-full'>
        oops! we couldnt find any matches.
    </div>


    return (

        <div className="relative min-h-screen px-[5%] md:px-[5%] md:pb-[5%] lg:pb-[3%]">
            <Nav />
            <div className="flex flex-col mt-5 sm:grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 gap-5">
                {
                    providedData.dispData.length !== 0 && providedData.dispData.slice(0, amount)
                }
                {
                    providedData.dispData.length === 0 && dispEmpty
                }

            </div>

            {
                providedData.dispData.length >= amount &&
                <Showmore AmountDisplayed={() => handleAmountDisplayed()} />

            }
        </div>
    )
}
export default Main