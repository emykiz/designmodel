import { Users } from '../../dummydata';
import './post.css'
import { useState } from 'react';


export default function Post({post}) {

    
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    function click(){
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked)
    }
    
    function commentSection(){
        document.querySelectorAll('.comment-box').style.display = 'block'
    }
  return (
    <div>
        <div className='centerside-container'>
                
                <div className='information-user'>
                    <div className='centersidebar-imgContainer'>
                            <img className="leftsidebar-img"src={Users.filter(u=>u.id ===post.userId)[0].profilePicture} alt="" />
                            <span>{Users.filter(user=>user.id === post.userId)[0].username}</span>
                            <span className='leftsidebar-time'>{post.date}</span>
                    </div>

                    <div>
                        <i className='fa fa-ellipsis-v'></i>
                    </div>
                </div>
               

               <div className='information-text'>
                    <p>{post.desc}</p>
               </div>
                
                <div className='information-image'>
                    <img src={post.photo} alt="" />
                </div>

                <div className="likesAndComment">
                    
                        
                       
                       <button className='loveIcon icon' onClick={click}>
                        <i className='fa fa-heart'></i>
                        <div>{like}</div>
                        <div class="tooltip">like</div>
                       </button>
                        
                        
                
                    <div className='commentIcon icon' onClick={commentSection}>
                        <i className='fa fa-message'></i>
                        <div>{post?.comment}</div>
                        <div class="tooltip">comment</div>
                        {commentSection}
                    </div>

                    <div className='shareIcon icon'>
                        <i className='fa fa-share'></i>
                        <div>{post.share}</div>
                        <div class="tooltip">share</div>
                    </div>
                </div>


               <div className='comment-box'>
                    <input type='text' placeholder="type your comment"></input>
                    <i className='fa fa-paper-plane'></i>
               </div>
            </div>
    </div>
  )
}
