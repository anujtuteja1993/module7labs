import React from "react";
import { Outlet } from "react-router-dom";

import { useParams, useSearchParams } from "react-router-dom";
const Post = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Outlet />
    </div>
  ) 
};

export default Post;