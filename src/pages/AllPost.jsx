import React, { useEffect, useState } from 'react'

import appWriteServices from "../Appwrite/config"
import { Container, PostCard } from '../components';

function AllPost() {
  const [posts,setPosts]=useState([]);
  useEffect( ()=>{
 appWriteServices.getPost([]).then((posts)=>{
  if(posts)
  {
    console.log(posts.documents)
    setPosts(posts.documents)
  }
})
  },[])
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
           {posts.map((post)=>(<div key={post.$id} className='p-2 w-1/4'>
           <PostCard {...post}/>
           </div>)) }
        </div>
      </Container>
    </div>
  )
}

export default AllPost
