import React from 'react';

const Button = ({ btnName, handleCategoris, isActive }) => {
    return (

        <button
            onClick={handleCategoris}
            className={`px-5 py-1 mx-2 my-4 rounded-lg font-medium transition-all duration-200
                ${isActive ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"}`}
        >
            {btnName}
        </button>
    );
};

export default Button;
