import axios from 'axios';

export const fetchImages = async (query, page, signal) => {
    const KEY = "NU8J312T-Vzd3gktSPBacJ9ng-UsBcWOHQf6tmQ95tY";
    const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${KEY}&per_page=5&query=${query}&page=${page}`,
        { signal });
    return response.data;
}