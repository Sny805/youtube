import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { casheResults, setSearchResults } from "../utills/searchSlice";
import { YOUTUBE_SEARCH_API, SEARCH_RESULTS_API, GOOGLE_API_KEY } from "../utills/constants";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search.casheState);


    const fetchSearchSuggestions = useCallback(async (query) => {
        if (!query.trim()) return;
        try {
            const response = await fetch(YOUTUBE_SEARCH_API + query);
            const json = await response.json();
            setSuggestions(json[1] || []);
            dispatch(casheResults({ [query]: json[1] }));
        } catch (error) {
            console.error("Error fetching search suggestions:", error);
        }
    }, [dispatch]);


    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                fetchSearchSuggestions(searchQuery);
            }
        }, 200);
        return () => clearTimeout(timer);
    }, [searchQuery, searchCache, fetchSearchSuggestions]);

    const handleSearch = async (query) => {
        if (!query.trim()) return;
        try {
            const response = await fetch(`${SEARCH_RESULTS_API}${query}&key=${GOOGLE_API_KEY}`);
            const json = await response.json();
            dispatch(setSearchResults(json.items));
            navigate(`/results?q=${query}`);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return {
        searchQuery,
        setSearchQuery,
        suggestions,
        showSuggestions,
        setShowSuggestions,
        handleSearch
    };
};

export default useSearch;

