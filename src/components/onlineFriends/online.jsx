import './online.css'

export default function Online({user}) {
  return (
    <div className='online'>
          <div className='online-friends'>
                <div className='rightsidebar-imgContainer'>
                        <img className="leftsidebar-img"src={user.profilePicture} alt="" />
                        <span>{user.username}</span>
                        <div className='active-dot'></div>
                </div>
            </div>
            
    </div>
  )
}
