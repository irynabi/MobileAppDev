import axios from 'axios'

export default axios.create({
  // this base URL will change each time you run npm run tunnel,
  // be sure to update this here!
  baseURL: 'https://1168-72-68-221-170.ngrok-free.app',
})
