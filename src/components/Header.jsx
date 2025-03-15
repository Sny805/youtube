import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utills/appSlice";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import useSearch from "../customHooks/useSearch";

const Header = () => {
    const dispatch = useDispatch();
    const {
        searchQuery,
        setSearchQuery,
        suggestions,
        showSuggestions,
        setShowSuggestions,
        handleSearch
    } = useSearch();

    return (
        <div className="grid grid-flow-col p-3 px-4">

            <div className="flex col-span-1 items-center gap-1">
                <img
                    onClick={() => dispatch(toggleMenu())}
                    className="h-11 cursor-pointer hover:bg-gray-200 rounded-full p-2"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
                    alt="menu"
                />
                <Link to="/">
                    <img
                        className="h-12 mx-2"
                        src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
                        alt="youtube-logo"
                    />
                </Link>
            </div>

            {/* Middle - Search Box */}
            <div className="col-span-10 px-24 relative">
                <div className="flex items-center">
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        type="text"
                        className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full outline-none"
                        placeholder="Search..."
                    />
                    <button
                        className="border border-gray-400 border-l-0 px-5 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200"
                        onClick={() => handleSearch(searchQuery)}
                    >
                        <IoMdSearch size={24} />
                    </button>
                </div>

                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute z-10 bg-white py-2 px-0 w-[31.5rem] shadow-lg rounded-lg border border-gray-100">
                        <ul>
                            {suggestions.map((s) => (
                                <li
                                    key={s}
                                    onMouseDown={() => {
                                        setSearchQuery(s);
                                        handleSearch(s);
                                    }}
                                    className="py-2 px-3 hover:bg-gray-100 flex gap-2 items-center cursor-pointer"
                                >
                                    <IoMdSearch size={20} /> {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Right - User Icon */}
            <div className="col-span-1">
                <img
                    className="h-8"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt="user"
                />
            </div>
        </div>
    );
};

export default Header;
