import axios from 'axios'

export default axios.create({
  // this base URL will change each time you run npm run tunnel,
  // be sure to update this here!
  baseURL: 'https://3ba5-98-116-74-36.ngrok-free.app',
})
