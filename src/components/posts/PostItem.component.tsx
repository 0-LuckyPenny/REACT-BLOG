import React from 'react';
import { Post } from '../../models/post.model';
import { formatDate, formatTime, truncate } from '../../libs/utils.lib';
import { Link } from 'react-router-dom';
import { useDeletePostMutation } from '../../features/posts/post.api';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {

  const [deletePost] = useDeletePostMutation()

  const handleDeletePost = (id?: number) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
    }
  };

  return (
    <div className='w-full flex flex-col'>
        <div className='relative w-full h-48 bg-gray-300 rounded-xl transition duration-300 ease-in-out transform hover:scale-105'>
            <img className='absolute top-0 left-0 w-full h-full object-cover rounded-xl' src={post.image} alt=''  />
            <span className='absolute top-3 right-3 bg-black/80 text-xs text-white font-normal px-2.5 py-2 rounded-xl'>{post.category}</span>
        </div>
        <div className='w-full text-xs font-light text-gray-500 px-2 mt-4'>
            {formatDate(post.createdAt) + ' ' + formatTime(post.createdAt)}
        </div>
        <div className='w-full text-2xl font-semibold text-gray-900 px-2 mt-2 truncate'>
            {post.title}
        </div>
        <div className='w-full h-44 overflow-hidden text-base font-normal text-gray-900 px-2 mt-2'>
          {truncate(post.description, 300)}
        </div>
        <div className='w-full h-[0.025em] bg-gray-400/90 mt-2'></div>
        <div className='w-full flex flex-row justify-end px-2 mt-2'>
          <Link className='text-indigo-500 underline underline-offset-2 mr-4' to='/posts/update' state={{ post: post }} >Edit</Link>
          <button className='text-red-500 underline underline-offset-2' onClick={() => handleDeletePost(post.id)} >Delete</button>
        </div>
     </div>
  );
};

export default PostItem;
