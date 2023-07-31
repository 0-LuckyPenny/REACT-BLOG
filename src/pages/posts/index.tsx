import React from 'react';
import PostItem from '../../components/posts/PostItem.component';
import { useGetPostsQuery } from '../../features/posts/post.api';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    const { data: posts, error, isLoading } = useGetPostsQuery('posts');

    if (isLoading) {
        return <div className='w-full h-56 text-center self-center'>Loading...</div>;
    }

    if (error) {
        return <div className='w-full h-56 text-center self-center'>An error have occured</div>;
    }

    console.log("Posts here => ", posts)

  return (
    <>

        <div className="mx-auto max-w-2xl py-3 sm:py-10 lg:py-18 mb-4">
          
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tight sm:text-6xl">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600">
                    Tech Chronicles
                </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <Link
                to="posts/create"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ⊕ New post
              </Link>
              <Link to="about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}

        </div>
      
    </>
  );
};

export default Home;
