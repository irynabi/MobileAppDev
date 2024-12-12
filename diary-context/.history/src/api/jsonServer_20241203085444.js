import axios from 'axios'

export default axios.create({
    /* change base url everytime u run npm run tunnel */
    baseURL: 'https://8f51-216-165-95-172.ngrok-free.app',
})