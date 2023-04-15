const Showmore=(props)=>{
    return(
        <div className="flex flex-col justify-center items-center w-full gap-[20px] py-[20px]">
            <div className="border-1 border-b w-80"></div>
            <div>

            </div>
            <p className="text-2xl outline outline-1 outline-black px-3 py-2 rounded-lg  cursor-pointer " onClick={props.AmountDisplayed}>
                Show More
            </p>
        </div>
    )
}
export default Showmore