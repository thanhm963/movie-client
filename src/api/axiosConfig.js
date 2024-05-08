import axios from 'axios';

export default axios.create({
    baseURL:' https://3dee-27-78-189-81.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});