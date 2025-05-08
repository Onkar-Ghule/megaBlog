import React, { useEffect, useState } from 'react';
import appwriteService from "../Appwrite/config";
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'
function PostCard({ $id, title,content, featuredImage }) {
  const [imageUrl, setImageUrl] = useState('');

console.log(appwriteService.getFilePreview(featuredImage))
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {/* Render the image only after the URL is fetched */}
         
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="rounded-xl" />
      
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      {parse(content)}  
      </div>
    </Link>
  );
}

export default PostCard;
