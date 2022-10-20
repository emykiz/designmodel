
import './topbar.css'

export default function topbar() {
  return (
    <>
     <div className='topbar'>
        <div className='topbar-container'>
            <div className='topbar-logo'>
                EMYKIZ
            </div>
            <div className='topbar-search'>
                <input type="search"></input>

                <i className='fa fa-search'></i>

            </div>
            <div className='topbar-info'>
                <div>
                    <p>Homepage</p>
                    <p>Timeline</p>
                </div>
                
                <div>
                    <div className='topbar-icons'>
                        <i className='fa fa-user'></i>
                        <div>

                        </div>
                    </div>
                    <div className='topbar-icons'>
                        <i className='fa fa-message'></i>
                        <div>
                            
                        </div>
                    </div>
                    <div className='topbar-icons'>
                        <i className='fa fa-bell'></i>
                        <div>
                            
                        </div>
                    </div>
                </div>
               
               <div className='topbar-imgContainer'>
                    <img className="topbar-img"src="./images/IMG_6858.jpg" alt="" />
               </div>
            </div>
        </div>
    </div>

    </>
   
  )
}
