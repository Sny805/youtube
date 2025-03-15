import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { fetchCategories } from "../utills/videoSlice" // Action to fetch videos

const categories = [
    { id: 0, name: "All" },
    { id: 10, name: "Music" },
    { id: 20, name: "Gaming" },
    { id: 22, name: "Blogs" },
    { id: 17, name: "Sports" },
    { id: 28, name: "Science & Technology" },
    { id: 24, name: "Entertainment" },
    { id: 23, name: "Comedy" },
    { id: 15, name: "Pets & Animals" },


];

const ButtonList = () => {
    const dispatch = useDispatch();
    const [activeCategory, setActiveCategory] = useState(0);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId)
        dispatch(fetchCategories(categoryId));
    };

    return (
        <div className='flex justify-center gap-2 p-2 overflow-x-auto w-[100%]'>
            {categories.map(({ id, name }) => (
                <Button key={id} btnName={name} handleCategoris={() => handleCategoryClick(id)} isActive={activeCategory === id} />
            ))}
        </div>
    );
};

export default ButtonList;
