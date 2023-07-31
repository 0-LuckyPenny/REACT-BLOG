import React from 'react';
import { useGetCategoriesQuery } from '../../features/categories/category.api';
import CategoryItem from '../../components/categories/CategoryItem.component';

const Categories: React.FC = () => {

    const { data: categories, error, isLoading } = useGetCategoriesQuery('categories');

    if (isLoading) {
        return <div className='w-full h-56 text-center self-center'>Loading...</div>;
    }

    if (error) {
        return <div className='w-full h-56 text-center self-center'>An error have occured</div>;
    }


  return (
    <>

        <div className="mx-auto max-w-2xl py-3 sm:py-10 lg:py-18 mb-4">
          
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tight sm:text-6xl">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600">
                    Categories
                </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {categories && categories.map((category) => <CategoryItem key={category.id} category={category} />)}

        </div>
      
    </>
  );
};

export default Categories;
