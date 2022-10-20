import './centerside.css'
import SharePost from '../../../src/components/sharePost/sharePost'
import Post from '../../../src/components/post/post'
import {Posts} from '../../../src/dummydata'


export default function centerside() {
  return (
    <>
    <div className='centerside'>
        <SharePost />
        {Posts.map((p)=>(
        <Post key={p.id}post={p} />
        ))}
    </div>
    </>
   
  )
}
