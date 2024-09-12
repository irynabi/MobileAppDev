import {FaAngry} from "react-icons/fa";

import Button from '../components/Button'

export default function ButtonPage(props){
    const valueForCondition = true
    return(
        <>
        <div> 
            {valueForCondition && <Button primary />}
            {valueForCondition || <Button primary />}

        <div>
            <header> MEow meow meow emoweoomecnieu</header>
        </div>
        <div>
          <Button primary onClick={() => console.log('click')} className="mb-8">Clicky</Button>
        </div>
        <div>
          <Button secondary><FaAngry />Clicky</Button>
        </div>
        <div>
          <Button success>Clicky</Button>
        </div>
        </div>
        </>
    )
}