import axios from 'axios';

export default axios.create({
    baseURL:' https://78be-115-76-112-207.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});