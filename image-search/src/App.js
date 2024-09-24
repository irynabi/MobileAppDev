// import searchImages from './api'
import {useState} from 'react'
import ImageList from './components/imageList' 
import SearchBar from "./components/SearchBar"
import searchImages from './api'
const App = () => {
    const [images, setImages] = useState([])
    const handleSubmit =  async (term) => {
        console.log('do a search with: ', term )
        const result = await searchImages(term)
        setImages(result)
        console.log(result)
    }
    return(
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images}></ImageList>
     </div>
    )
}

export default App