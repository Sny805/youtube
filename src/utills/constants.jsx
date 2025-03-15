export const GOOGLE_API_KEY = "AIzaSyAB2DZ5MZdfJlVug1T8Nr2zkqtJODcNJqM"


export const YOUTUBE_VIDEOS_APIS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;


export const VIDEOS_APIS = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&videoCategoryId=`

export const CHANNEL_API_URL = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id='

export const VIDEO_DETAILS_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY + "&id=";

export const COMMENTS_URL = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=`;


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_RESULTS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const OFFSET_LIVE_CHAT = 10;


export const categories = [
    { id: 0, name: "Home" },
    { id: 1, name: "Film & Animation" },
    { id: 2, name: "Autos & Vehicles" },
    { id: 25, name: "News & Politics" },
    { id: 26, name: "How-to & Style" },
    { id: 24, name: "Entertainment" },
    { id: 23, name: "Comedy" },
    { id: 15, name: "Pets & Animals" },
];




