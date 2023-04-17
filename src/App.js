import { createContext, useState } from "react";
import Main from "./Pages/Main";
import Filter from "./components/Filter";
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Property from "./Pages/Property";
import { Route, Routes } from "react-router-dom";

export const  provideData=createContext()

function App() {
  const [toggleFilter,setToggleFilter]=useState(false) // used to toggle the filters

  const [showProperty,setShowProperty]=useState() // used to set the items that show the property details


  const handleToggleFilter=()=>{
    setToggleFilter(!toggleFilter)
}


  return (
    <provideData.Provider value={{handleToggleFilter,setShowProperty,showProperty}}>
      <div className="relative dark:text-white dark:bg-black min-h-screen font-Niramit">
        <Nav/>
        {!toggleFilter && 
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Details" element={<Property/>}/>
        </Routes>  
        }

        <Footer/>
        {toggleFilter&&<Filter/>}
      </div>
    </provideData.Provider>
  );
}

export default App;
