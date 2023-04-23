import { useContext, useState } from "react"
import materialUiImports from "./imports/materialUiImports"
import { provideData } from "../App"
const Addfavorite=({FavoriteId})=>{
    const providedData=useContext(provideData)
    const [Name,setName]=useState("");
    const handleFavorite=()=>{
       providedData.setFavorite(item=>[...item,{
            name: Name,
            favoritesId: Number(FavoriteId)
        }])
        providedData.handleAddFavorite()
    }

    
    return(
        <div className="absolute w-full top-0 min-h-[100vh] dark:bg-white/[10%] bg-black/[10%] z-50 flex justify-center items-center ">
            <div className='mt-[20px] dark:text-white dark:bg-black bg-white rounded-md basis-10/12 md:basis-6/12 lg:basis-5/12 xl:basis-4/12'>
                <div className="relative flex justify-center items-center px-5 border-b border-1 py-5">
                    <div className="absolute left-5 cursor-pointer" onClick={()=>providedData.handleAddFavorite()}>
                        <materialUiImports.CloseIcon/>
                    </div>
                    <p className="font-bold">Name this wishist</p>
                </div>
                <div className="flex flex-col min-h-[200px] px-5">
                    <div className="mt-[30px] outline outline-1 outline-gray-200 p-2 flex flex-col border border-black rounded-lg">
                        <p className="text-gray-400">Name</p>
                        <input type="name" value={Name}  onChange={(e)=>setName(e.target.value)} className="text-md outline-none"/>
                    </div>
                    <p className="text-gray-800/50">50 characters maximum</p>
                </div>
                <div className="border-t border-1 px-5">
                    <button className={`rounded-lg font-bold text-center w-full p-4 bg-gray-600 text-white my-5 text-lg ${!Name && "cursor-not-allowed" } ${!Name? "bg-gray-600/30" : "bg-blue-600" } `} onClick={handleFavorite} >Create</button>
                </div>
            </div>
        </div>
    )
}
export default Addfavorite
