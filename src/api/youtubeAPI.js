import axios from 'axios';
const KEY = 'AIzaSyBi9vwTs60agvwWXfrD062sSGnaScmJpgA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
})