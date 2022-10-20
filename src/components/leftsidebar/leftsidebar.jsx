import './leftsidebar.css'

export default function leftsidebar() {
  return (
    <>
        <div className='leftsidebar'>
            <div>
                <i className='fa fa-feed'></i>
                <p>feed</p>
            </div>
            <div>
                <i className='fa fa-message'></i>
                <p>chats</p>
            </div>
            <div>
                <i className='fa fa-play'></i>
                <span>videos</span>
            </div>
            <div>
                <i className='fa fa-users'></i>
                <span>Groups</span>
            </div>
            <div>
                <i className='fa fa-play'></i>
                <span>Bookmarks</span>
            </div>
            <div>
                <i className='fa fa-question'></i>
                <span>Questions</span>
            </div>
            <div>
                <i className='fa fa-users'></i>
                <span>Jobs</span>
            </div>
            <div>
                <i className='fa fa-users'></i>
                <span>Events</span>
            </div>
            <div>
                <i className='fa fa-users'></i>
                <span>Courses</span>
            </div>
            <button>Show more</button>
            <hr />
            <div className='leftsidebar-imgContainer'>
                    <img className="leftsidebar-img"src="./images/IMG_6858.jpg" alt="" />
                    <span>John Paul</span>
            </div>
            <div className='leftsidebar-imgContainer'>
                    <img className="leftsidebar-img"src="./images/IMG_6858.jpg" alt="" />
                    <span>John Paul</span>
            </div>
            <div className='leftsidebar-imgContainer'>
                    <img className="leftsidebar-img"src="./images/IMG_6858.jpg" alt="" />
                    <span>John Paul</span>
            </div>
            <div className='leftsidebar-imgContainer'>
                    <img className="leftsidebar-img"src="./images/IMG_6858.jpg" alt="" />
                    <span>John Paul</span>
            </div>
            <div className='leftsidebar-imgContainer'>
                    <img className="leftsidebar-img"src="./images/IMG_6858.jpg" alt="" />
                    <span>John Paul</span>
            </div>
            <div className='leftsidebar-imgContainer'>
                    <img className="leftsidebar-img"src="./images/IMG_6858.jpg" alt="" />
                    <span>John Paul</span>
            </div>
        </div>
    </>
  )
}
