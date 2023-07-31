import React from 'react';
import { Category } from '../../models/category.model';
import { truncate } from '../../libs/utils.lib';

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
      <h3 className="text-xl font-semibold text-gray-900 text-ellipsis">{category.name}</h3>
      <p className="text-gray-600 mt-2">{truncate(category.description, 225)}</p>
    </div>
  );
};

export default CategoryItem;