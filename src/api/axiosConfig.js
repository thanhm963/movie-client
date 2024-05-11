import axios from 'axios';

export default axios.create({
    baseURL:' https://29ac-116-109-18-190.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});