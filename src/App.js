import { createContext  , useEffect, useState } from "react";
import Main from "./Pages/Main";
import Filter from "./components/Filter";
import Footer from "./components/Footer"
import Property from "./Pages/Property";
import { Route, Routes } from "react-router-dom";
import Addfavorite from "./components/Addfavorite";
import Terms from "./Pages/Terms";
import data from "./mockdata/MOCK_DATA";
import Card from "./components/Card";

export const  provideData=createContext()

function App() {
  const [toggleFilter,setToggleFilter]=useState(false) // used to toggle the filters
  const [showProperty,setShowProperty]=useState([]) // used to set the items that show the property details
  const [favorite,setFavorite]=useState([])// this is where wish lists are stored
  const [favoriteId,setFavoriteId]=useState(0)
  const [favoriteName,setFavoriteName]=useState("");//
  const [addToFavoriteToggle,setAddToFavoriteToggle]=useState(false)// used to toggle the favorite window
  const [filterPropertyAmount,setfilterPropertyAmount]=useState(data.length)
  const [currentFilter,setCurrentFilter]=useState({
    minPrice: 10,
    maxPrice: 3000,
    entirePlace: false,
    privateRoom: false,
    roomNo: 0,
    bedNo:0,
    propertyType: '',
    bathRooms:0,
    wifi: false,
    Kitchen: false,
    instantBooking: false,
    selfCheckin:false,
    noSteps: false,
    entranceWidth: false,
    superhost: false,
    plus: false

  })
  const [propertyType,setPropertyType]=useState(0)

  const handleToggleFilter=()=>{
    setToggleFilter(!toggleFilter)
  }
  
  const handleToggleFavorite=()=>{
    setAddToFavoriteToggle(!addToFavoriteToggle)
  }//this toggles the add to favorite prompt

  const handleAddToFavorite=()=>{
    setFavorite([
      ...favorite,
      {
        name:favoriteName,
        id: favoriteId
      }]
    )
    setFavoriteName("")
    handleToggleFavorite()
  }//this handles the add to favorite function

  const dispData=propertyType!==0?
  data.filter(item=>
      item.PropertyType===propertyType &&
      item.Price>=currentFilter.minPrice &&
      item.Price<=currentFilter.maxPrice &&  
      item.Superhost>=currentFilter.superhost && 
      item.Guests>=currentFilter.entirePlace && 
      item.BedNo>=currentFilter.bedNo && 
      item.BedRooms>=currentFilter.roomNo && 
      item.BathNo>=currentFilter.bathRooms
      ).map(item=><Card id={item.id} key={item.id} data={item} />):
  data.filter(item=> 
      item.PropertyType!==propertyType &&
      item.Price>=currentFilter.minPrice &&  
      item.Price<=currentFilter.maxPrice &&  
      item.Superhost>=currentFilter.superhost && 
      item.Guests>=currentFilter.entirePlace && 
      item.BedNo>=currentFilter.bedNo && 
      item.BedRooms>=currentFilter.roomNo && 
      item.BathNo>=currentFilter.bathRooms)
      .map(item=><Card key={item.id} data={item} />)
    useEffect(()=>{
        setfilterPropertyAmount(item=>item=dispData.length)
    },[dispData])
  
  return (
    <provideData.Provider value={{handleToggleFilter,setShowProperty,propertyType,setPropertyType,showProperty,setCurrentFilter,
    currentFilter,
    handleToggleFavorite,
    setFavorite,
    favorite,
    setFavoriteId,
    favoriteId,
    filterPropertyAmount,
    setfilterPropertyAmount,
    dispData,
    handleAddToFavorite,
    setFavoriteName,
    favoriteName}}
    >
      <div className="relative dark:text-white dark:bg-black min-h-screen font-Niramit">
        {!toggleFilter && 
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Details/:id" element={<Property showProperty/>}/>
          <Route path="/Terms" element={<Terms/>}/>
        </Routes>  
        }

        <Footer/>
        {toggleFilter&&<Filter/>}
      </div>
      {addToFavoriteToggle && <Addfavorite FavoriteId={favoriteId}/>}
    </provideData.Provider>
  );
}

export default App;
