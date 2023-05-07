const Showmore=(props)=>{
    return(
        <div className="flex flex-col justify-center items-center w-full gap-[20px] md:gap-[10px] py-[20px]">
            <div className="border-1 border-b w-[70%]"></div>

            <p className="text-xl outline outline-1 outline-black px-3 py-2 rounded-lg  cursor-pointer " onClick={props.AmountDisplayed}>
                Show More
            </p>
        </div>
    )
}
export default Showmore