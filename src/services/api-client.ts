import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'bd5d6dc4be894636acfcd6febca96079'
    }
})

export default apiClient