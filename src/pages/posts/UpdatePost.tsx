import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Post } from '../../models/post.model';
import { useUpdatePostMutation } from '../../features/posts/post.api';
import PostForm from '../../components/posts/PostForm.component';


const UpdatePost: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { post } = location.state;
  const [updatePost, response] = useUpdatePostMutation()

  console.log("Post to update ", post)


  if (!post) {
    return <div>Post not found.</div>;
  }

  const handleUpdatePost = (formData: Post) => {

    const updatedPost: Post = {
      ...formData,
      id: post.id, 
      createdAt: post.createdAt,
    };

    updatePost(updatedPost).unwrap().then(() => {
    })
    .then((error) => {
      console.log(error)
    })

    navigate('/');
    
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-3">Update Post : {post.title}</h1>
      <PostForm post={post} onSubmit={handleUpdatePost} />
    </div>
  );
};

export default UpdatePost;
