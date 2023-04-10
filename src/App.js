import { createContext, useState } from "react";
import Main from "./Pages/Main";
import Filter from "./components/Filter";
import Footer from "./components/Footer"
import Nav from "./components/Nav"
export const  provideData=createContext()

function App() {
  const [toggleFilter,setToggleFilter]=useState(false)

  const handleToggleFilter=()=>{
    setToggleFilter(!toggleFilter)
}
  return (
    <provideData.Provider value={{handleToggleFilter}}>
      <div className="relative dark:text-white dark:bg-black">
        <Nav/>
        {!toggleFilter && <Main/>}
        <Footer/>
        {toggleFilter&&<Filter/>}
      </div>
    </provideData.Provider>
  );
}

export default App;
