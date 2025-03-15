import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../utills/videoSlice";
import { categories } from "../utills/constants";


const Sidebar = () => {
    const isOpenMenu = useSelector((store) => store.app.isOpenMenu);
    const dispatch = useDispatch();
    const [activeCategory, setActiveCategory] = useState(0); // Default to "Home"

    if (!isOpenMenu) return null;

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        dispatch(fetchCategories(categoryId));
    };

    return (
        <div className="p-5 w-[16%] bg-white h-screen">
            <ul className="space-y-2">
                {categories.map(({ id, name }) => (
                    <li
                        key={id}
                        onClick={() => handleCategoryClick(id)}
                        className={`cursor-pointer px-4 py-2 rounded-md transition duration-200
                            ${activeCategory === id ? "bg-gray-200" : "hover:bg-gray-200"}`}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
