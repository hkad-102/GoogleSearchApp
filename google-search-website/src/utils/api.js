import axios from 'axios'

// const BASE_API = 'AIzaSyD7FTw873a3HsPLBxYfrCjQRV7cB7hVsnA'
// const cx = 'd393d3f720e4a4158';

const BASE_URL = 'https://www.googleapis.com/customsearch/v1'

const params = {
    key: 'AIzaSyD7FTw873a3HsPLBxYfrCjQRV7cB7hVsnA',
    cx: 'd393d3f720e4a4158'
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload},
    });
    return data; 
}