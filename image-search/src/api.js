import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID YOUR_API_KEY_HERE_DO_NOT_PUBLISH',
        }, 
        params: {query: term},
    })
    console.log(response.data.results)
    return response.data.results
}
export default searchImages