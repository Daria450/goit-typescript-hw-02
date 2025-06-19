import axios from 'axios';
import { UnsplashResponse } from '../types';


export const fetchImages = async (query: string, page: number = 1, signal?: AbortSignal): Promise<UnsplashResponse> => {

    const KEY = "NU8J312T-Vzd3gktSPBacJ9ng-UsBcWOHQf6tmQ95tY";
    const response = await axios.get<UnsplashResponse>(`https://api.unsplash.com/search/photos/?client_id=${KEY}&per_page=5&query=${query}&page=${page}`,
        { signal });
    return response.data;

}