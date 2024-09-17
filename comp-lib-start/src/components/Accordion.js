import {useState} from 'react'
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'
export default function Accordion(props){
    const [expandedIndex, setExpandedIndex] = useState(-1)
    const {items} = props
    const renderedItems = items.map((item, index)  => {
        const isExpanded = index === expandedIndex
        const icon = <span className="text-2xl">
            {/*Ternary: 
                1. 'isExpanded' condition you're checking to be true
                2. the : basically means else
            */}
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>
        const handleClick = (nextIndex) => {
            setExpandedIndex((currentExpandedIndex) => {
                  {/*if item is already open, close it. else, open it*/}
                  {/*we get current and next from react!*/}
                 if (currentExpandedIndex === nextIndex){
                     return -1
                 } else {
                     return nextIndex
                 }
            })
         }
        return(
            <div key={item.id} >
                <div onClick={() => handleClick(index)} className="flex justify-between p-3 bg-gray-199 border-b items-center cursor-pointer">
                    {item.label}
                    {icon}
                </div>
                {/* If content index matches the expanded index in useState, render it. Else, nothing */}
                {/* && means that what gets rendered is the last truthy value, (truthy = true and real) */}
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })

    return <div>{renderedItems}</div>
}