
import React,{useState,useEffect} from 'react'
import appWriteService from '../Appwrite/config'
import {Container,PostForm} from '../components'
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
  const {slug}=useParams();
  const navigate=useNavigate()
  const [post,setPost]=useState();
  useEffect(()=>{
    if(slug){
      
      appWriteService.getPosts(slug).then((post)=>{
        if(post){
          setPost(post)
         
        }
        else navigate("/")
      })
    }
  },[slug,navigate])

  return post?(
  
    <div className='py-8'>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  ):null
}

export default EditPost
