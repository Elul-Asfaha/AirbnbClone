import { useEffect, useState } from "react"
import materialUiImports from "../components/imports/materialUiImports"
const Help=()=>{
    const [toTop,setToTop]=useState(0)

    const handleToTop=()=>{
        window.scrollTo(0,0)
    }
    return(
        <div className="md:w-[80%] mx-auto">
            <p className="text-gray-500 my-5">Legal terms</p>
            <p className="text-4xl flex my-5">Terms of service</p>
            <div className="border border-1 rounded-lg px-5% pt-3 pb-5">
                <materialUiImports.LanguageIcon/>
               <p className="basis-11/12 text-sm">
                    If your country of residence or establishment is within the European Economic Area (“EEA”), Switzerland or the United Kingdom, <span className="font-bold underline">the Terms of Service for European Users</span> apply to you.
                    <br/>
                    If your country of residence or establishment is outside of the EEA, Switzerland, and the United Kingdom, <span className="font-bold underline">the Terms of Service for Non-European Users</span> apply to you.
                </p>
            </div>
            <p className="text-4xl flex my-5">Terms of service</p>

            <button className="flex items-center justify-center py-2 dark:bg-white dark:text-black bg-black text-white rounded-lg max-w-[150px] fixed bottom-6 right-8 px-5 py-3 text-md" onClick={()=>handleToTop()}> 
                <materialUiImports.ArrowUpwardIcon/> 
                back to top
            </button>
        </div>
    )
}
export default Help