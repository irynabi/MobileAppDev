import {useState} from 'react'
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'
import './styles.css'

export default function UserRating(){
    const [count, setCount] = useState(0)
    const handlePlusClick = () => {
        if (count < 5 ){
            setCount(count+1)
        }
        return
    }
    const handleMinusClick = () => {
        if (count > 0){
            setCount(count-1)
        }
        return
    }
    return(
        <div className ="rating-wrapper" >
            {/* Conditionally render the [-] button if count > 0 */}
            {count > 0 &&(
                <button className="rating-button" onClick={handleMinusClick}>[-]</button>
            )}
           <span>
                {/* Render hearts based on the current count */}
                {[...Array(count)].map((_, i) => (
                    <span key={i}>
                        <Heart />
                    </span>
                ))}
            </span>
            {/* Conditionally render the [+] button if count < 5 */}
            { count < 5 && (
                <button className="rating-button" onClick={handlePlusClick}>[+]</button>
            )}
        </div>
    )
}