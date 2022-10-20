import Online from '../onlineFriends/online'
import './rightsidebar.css'
import {Users} from "../../dummydata"
export default function rightsidebar() {
  return (
    <div className='rightsidebar'>
        <div>
            <img className="birthdayImg" src="images/Butterfly.png" alt="tex"></img>
            <p>Progress Akanimo <span>and</span>3 other friends <span>have a birthday today.</span></p>
        </div>

        <div className='img-container'>
            <img className="rightside-img"src="images/bb.jpg" alt='text'/>
        </div>
        <p>online friends</p>
        {Users.map((u)=>(
        <Online user={u}/>
        ))}
    </div>
  )
}
