export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'x-rapidapi-key': '15456fc3e4msh3643ac909c90220p104c39jsn4100354d9f36'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': '15456fc3e4msh3643ac909c90220p104c39jsn4100354d9f36',
    },
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};