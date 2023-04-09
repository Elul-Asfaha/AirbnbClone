import StarIcon from '@mui/icons-material/Star';
const Card=()=>{
    return(
        <div className="flex flex-col w-[80%] md:max-w-[300px] mx-auto">
            <img src='logo192.png' className='container' alt=''/>
            <div className='flex justify-between'>
                <p className=" font-bold">
                    Addis Ababa,
                    <span>
                        Ethiopia
                    </span>
                </p>
                <p className='flex gap-2'>
                    <StarIcon/>
                    <span>
                        4.8
                    </span>
                </p>
            </div>
            <p>
                Hosted by Antonello
            </p>
            <p>
                Apr 12-18
            </p>
            <p><span>$</span> Night</p>
        </div>
    )
}
export default Card