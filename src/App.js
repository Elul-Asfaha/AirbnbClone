import { createContext, useEffect, useState } from "react";
import Main from "./Pages/Main";
import Filter from "./components/Filter";
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Property from "./Pages/Property";
import { Route, Routes } from "react-router-dom";

export const  provideData=createContext()

function App() {
  const [toggleFilter,setToggleFilter]=useState(false) // used to toggle the filters

  const [showProperty,setShowProperty]=useState([]) // used to set the items that show the property details

  const [currentFilter,setCurrentFilter]=useState({
    minPrice: 8,
    maxPrice: 20,
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

  useEffect(()=>{
    const property=JSON.parse(sessionStorage.getItem('store_property'))
    property != null && setShowProperty(property)
  },[]) 
  useEffect(()=>{
    showProperty.length!== 0 && sessionStorage.setItem('store_property',JSON.stringify(showProperty))
    },[showProperty]) // this useeffect stores the card data that i want to be displayed in a sessionSorage on the webbrowser


  const handleToggleFilter=()=>{
    setToggleFilter(!toggleFilter)
  }










  return (
    <provideData.Provider value={{handleToggleFilter,setShowProperty,propertyType,setPropertyType,showProperty,setCurrentFilter,currentFilter}}>
      <div className="relative dark:text-white dark:bg-black min-h-screen font-Niramit">
        <Nav/>
        {!toggleFilter && 
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Details" element={<Property showProperty/>}/>
        </Routes>  
        }

        <Footer/>
        {toggleFilter&&<Filter/>}
      </div>
    </provideData.Provider>
  );
}

export default App;
