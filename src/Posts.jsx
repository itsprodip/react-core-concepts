import React, { use } from 'react';
import Post from './Post';
const Posts = ({ postPromise }) => {
  const posts = use(postPromise);
  console.log(posts);
  return (
    <div>
      <h2>All Post Here</h2>
    {
        posts.map(posts=><Post key={posts.id} post={posts}></Post>)
    }
    </div>
  );
};

export default Posts;