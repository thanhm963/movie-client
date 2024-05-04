import axios from 'axios';

export default axios.create({
    baseURL:'https://1a78-116-100-46-140.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});