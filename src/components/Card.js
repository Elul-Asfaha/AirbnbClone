import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Card=(props)=>{
    return(
        <div className="flex flex-col w-[90%] md:max-w-[300px] my-5 mx-auto relative">
            <img src={props.data.Image} className='container rounded-lg mb-1' alt=''/>
            <div className='flex justify-between'>
                <p className=" font-bold">
                    {props.data.City},
                    <span>
                        {props.data.Country}
                    </span>
                </p>
                <p className='flex gap-2'>
                    <StarIcon/>
                    <span>
                        {props.data.Rating}
                    </span>
                </p>
            </div>
            <p>
                Hosted by {props.data.Name}
            </p>
            <p>
                {props.data.Date}
            </p>
            <p className='font-semibold'><span>${props.data.Price}</span> Night</p>
            <div className='absolute inset-0 flex justify-end px-3 py-2'>
                <FavoriteBorderIcon className='text-white' style={{fill:''}}/>
            </div>
        </div>
    )
}
export default Card