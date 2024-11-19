import Dropdown from '../components/Dropdown'
import { useState } from 'react'

const DATA_TO_FILTER = [
  {id: 1, name: 'Iryn', team: 'red'},
  {id: 2, name: 'Fabi', team: 'green'},
  {id: 3, name: 'Raceli', team: 'blue'},
  {id: 4, name: 'Jess', team: 'red'},
  {id: 5, name: 'Tati', team: 'green'},
  {id: 6, name: 'Gab', team: 'blue'},
]

const OPTIONS =[
  {label: 'Red', team: 'red'},
  {label: 'Green', team: 'green'},
  {label: 'Blue', team: 'blue'},
]

const DropdownPage = () => {
  const [value, setValue] = useState(null)

  // const filteredOptions = DATA_TO_FILTER.filter((student) => student.team === 'red')
  let filteredData = DATA_TO_FILTER
  if (value?.value){
    filteredData = DATA_TO_FILTER.filter((student) => student.team === value.value)
  }

  const handleChange = (option) => {
    setValue(option)
  }
  
  const colorMap = {
    red: 'bg-red-500',
    green: 'bg-green-400',
    blue: 'bg-blue-500'
  }

  return (
    <div>
      <h3>{value?.label}</h3>
      <Dropdown options={OPTIONS} value={value} onChange={handleChange}/>
      <h2 className={colorMap[value?.value]}>Students from {value?.label} team </h2>
      {
        filteredData.map((student) => (<p key={student.id}>{student.name}</p>))
      }
    </div>
  )
}

export default DropdownPage
