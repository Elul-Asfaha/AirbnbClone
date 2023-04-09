import Card from "../components/Card"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

const Main=()=>{
    return(
        <div className="min-h-screen relative">
            <Nav/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Footer/>
        </div>
    )
}
export default Main