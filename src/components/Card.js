import materialUiImports from './imports/materialUiImports';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { provideData } from '../App';
const Card=(props)=>{
    const providedData=useContext(provideData)

    const handleShowDetails=(e)=>{
        providedData.setShowProperty(props.data)
    }
    
    return(
        <div className='relative flex flex-col w-[100%] min-h-[350px]'>
            <Link to="/Details" onClick={handleShowDetails} className="flex flex-col md:max-w-[300px] justify-between h-full ">
                <img src={props.data.Image && props.data.Image} loading="lazy"  className='container rounded-lg mb-1 min-h-[65%] skeleton' alt=''/>
                <div className='flex justify-between flex-wrap'>
                    <p className="font-bold skeleton">
                        {props.data.City && props.data.City},
                        <span>
                             {' '}
                            {props.data.Country && props.data.Country}
                            
                        </span>
                        
                    </p>
                    <p className='flex gap-1 skeleton'>
                        <materialUiImports.StarIcon/>
                        <span>
                            {props.data.Rating && props.data.Rating}
                        </span>
                    </p>
                </div>
                <span>
                           beds {props.data.BedNo}
                        </span>
                <p className='skeleton w-full'>
                    Hosted by {props.data.Name && props.data.Name}
                </p>
                <p className='skeleton'>
                    {props.data.Date && props.data.Date}
                </p>
                <p className='font-semibold skeleton'><span>${props.data.Price && props.data.Price}</span> Night</p>
                
            </Link>
            <div className='absolute right-3 top-3 max-h-[30px] max-w-[30px] cursor-pointer'>
                    <materialUiImports.FavoriteBorderIcon className='text-white hover:text-gray-300' style={{fill:''}}/>
            </div>
        </div>
    )
}
export default Card