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
        <div className='relative flex flex-col w-[100%] min-h-[300px] md:min-h-[330px] hover:shadow hover:shadow-lg'>
            <Link to={`/Details/${props.data.id}`} onClick={handleShowDetails} className="flex flex-col justify-between md:max-w-[300px] h-full">
                <img src={props.data.Image && props.data.Image}   className='container rounded-t-lg min-h-[65%] bg-gray-200' alt=''/>
                <div className='flex justify-between flex-wrap px-1 mt-1'>
                    <p className="font-bold skeleton">
                        {props.data.City && props.data.City},
                        <span>
                             {' '}
                            {props.data.Country && props.data.Country}
                            
                        </span>
                        
                    </p>
                    <p className='flex gap-1 skeleton px-1'>
                        <materialUiImports.StarIcon/>
                        <span>
                            {props.data.Rating && props.data.Rating}
                        </span>
                    </p>
                </div>
                <div className='mt-2 px-1'>
                    <p className='skeleton w-full'>
                        Hosted by {props.data.Name && props.data.Name}
                    </p>
                    <p className='skeleton'>
                        {props.data.Date && props.data.Date}
                    </p>
                    <p className='font-semibold skeleton'><span>${props.data.Price && props.data.Price}</span> Night</p>
                </div>
            </Link>
            <div className='absolute right-3 top-3 max-h-[30px] max-w-[30px] cursor-pointer' onClick={
                ()=>{
                    providedData.handleToggleFavorite();
                    providedData.setFavoriteId(props.data.id)
                }
                }>
                    <materialUiImports.FavoriteBorderIcon className='text-white hover:text-gray-300' style={{fill:''}}/>
            </div>
        </div>
    )
}
export default Card