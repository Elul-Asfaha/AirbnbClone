import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { provideData } from '../App';
const Card=(props)=>{
    const providedData=useContext(provideData)
    const handleShowDetails=(e)=>{
        providedData.setShowProperty(props.data)
    }
    return(
        <Link to="/Details"  onClick={handleShowDetails}>
            <div className="flex flex-col w-[90%] md:max-w-[300px] my-5 mx-auto relative">
                <img src={props.data.Image} loading="lazy" className='container rounded-lg mb-1' alt=''/>
                <div className='flex justify-between flex-wrap'>
                    <p className="font-bold">
                        {props.data.City},
                        <span>
                            {props.data.Country}
                        </span>
                    </p>
                    <p className='flex gap-1'>
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
        </Link>
    )
}
export default Card