import React, { useContext, useEffect } from "react";
import { PostCard } from "./components/PostCard";
import { useState } from "react";
import axios from "axios";
import { data } from "react-router-dom";


export const Posts = () => {
   const [TodoList, setTodoList] = useState([])
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPostdata = async () => {
      try {
        const response = await axios.get(
          "https://json-placeholder.mock.beeceptor.com/posts",
        );
        setPostList(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPostdata();
  }, []);
  if (isError) {
    return <div>Somthing went worng..</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      {PostList.map((post) => (
        <PostCard key={post.id} post={post} />
    
       
        
      ))}
    </div>
  );
};
