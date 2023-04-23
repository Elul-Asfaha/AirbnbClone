import { createContext  , useState } from "react";
import Main from "./Pages/Main";
import Filter from "./components/Filter";
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Property from "./Pages/Property";
import { Route, Routes } from "react-router-dom";
import Addfavorite from "./components/Addfavorite";

export const  provideData=createContext()

function App() {
  const [toggleFilter,setToggleFilter]=useState(false) // used to toggle the filters

  const [showProperty,setShowProperty]=useState([]) // used to set the items that show the property details
  const [Favorite,setFavorite]=useState([])// this is where wish lists are stored
  const [FavoriteId,setFavoriteId]=useState(0)
  const [addToFavoriteToggle,setAddToFavoriteToggle]=useState(false)// used to toggle the favorite window

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
  
  const handleAddFavorite=()=>{
    setAddToFavoriteToggle(!addToFavoriteToggle)
  }
  
  return (
    <provideData.Provider value={{handleToggleFilter,setShowProperty,propertyType,setPropertyType,showProperty,setCurrentFilter,currentFilter,handleAddFavorite,setFavorite,Favorite,setFavoriteId,FavoriteId}}>
      <div className="relative dark:text-white dark:bg-black min-h-screen font-Niramit">
        <Nav/>
        {!toggleFilter && 
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Details/:id" element={<Property showProperty/>}/>
        </Routes>  
        }

        <Footer/>
        {toggleFilter&&<Filter/>}
      </div>
      {addToFavoriteToggle && <Addfavorite FavoriteId={FavoriteId}/>}
    </provideData.Provider>
  );
}

export default App;
