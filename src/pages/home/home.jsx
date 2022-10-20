import Centerside from "../../components/centerside/centerside";
import Leftsidebar from "../../components/leftsidebar/leftsidebar";
import Topbar from "../../components/topbar/topbar"
import './home.css'
import Rightsidebar from "../../components/rightsidebar/rightsidebar";

export default function home() {
  return (
    <div>
        <Topbar /> 
        <div className="homepage">
            <Leftsidebar />
            <Centerside />
            <Rightsidebar />
        </div>
    </div>
  )
}
