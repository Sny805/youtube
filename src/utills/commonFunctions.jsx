// format views
export const formatViews = (views) => {
    if (views >= 1_000_000) return (views / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    if (views >= 1_000) return (views / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    return views?.toString();
};

// Format Date function
export const formatTimeAgo = (dateString) => {
    const timeUnits = [
        { unit: "year", seconds: 31536000 },
        { unit: "month", seconds: 2592000 },
        { unit: "week", seconds: 604800 },
        { unit: "day", seconds: 86400 },
        { unit: "hour", seconds: 3600 },
        { unit: "minute", seconds: 60 },
        { unit: "second", seconds: 1 },
    ];

    const pastTime = new Date(dateString);
    const currentTime = new Date();
    const secondsElapsed = Math.floor((currentTime - pastTime) / 1000);

    for (let { unit, seconds } of timeUnits) {
        const interval = Math.floor(secondsElapsed / seconds);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? "s" : ""} ago`;
        }
    }
    return "Just now";
};

// format duration
export const formatDuration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = match[1] ? match[1].replace("H", "") : 0;
    const minutes = match[2] ? match[2].replace("M", "") : 0;
    const seconds = match[3] ? match[3].replace("S", "") : 0;

    let formattedTime = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    if (hours > 0) {
        formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }

    return formattedTime;
};