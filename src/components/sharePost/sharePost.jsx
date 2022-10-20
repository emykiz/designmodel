import './sharePost.css'

export default function SharePost
() {
  return (
    <div>
        <div className='createPost'>
            <div className='centersidebar-imgContainer '>
                        <img className="leftsidebar-img"src="./images/IMG_6858.jpg" alt="" />
                        <span>John Paul</span>
                        
            </div>
            <div className='postcreating'>
                <input type='text' placeholder='create post' className='createpost'></input>

                <button className='createPost-button'>createpost</button>  
            </div>
                    
        </div>   
    </div>
  )
}
