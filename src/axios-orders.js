import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-70196.firebaseio.com/'
});

export default instance;