import ReactDOM from 'react-dom'
import {useEffect} from 'react'
export default function Modal(props) {
  const {onClose, children, actionBar} = props
  //The useEffect hook from React: fires every time the component is mounted/created in the DOM 
  //First argument is arrow function you want to fire, second is an array of states you want to watch for a change. 
  //When they change, useEffect's arrowFunction fires. (like conditions)
  //If second arg is empty, the function fires when it's created only
  useEffect(() => {
    //disable scrolling when the modal is open
    document.body.classList.add('overflow-hidden')
    //useEffect can also take a callback function: so if you return a function here, 
    //it will fire when component is destroyed or updated
    return () => {document.body.classList.remove('overflow-hidden')}
  },[])
  
  return ReactDOM.createPortal(
    <>
    {/* Overlay*/}
    <div 
      onClick={onClose} 
      className="absolute inset-0 bg-gray-300 opacity-50">
    </div>

    {/* Modal BG*/}
    <div className="absolute inset-40 p-10 bg-white">
      {/* Modal Content*/}
      <div className="flex flex-col justify-between h-full">
        <div>{children}</div>
      {/* Action Bar */}
      <div className="flex flex-row justify-end">{actionBar}</div>
      </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}
