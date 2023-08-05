import { useState, useEffect } from 'react'
import Items from "./Components/Items"
import './App.css'

function App() {

  const [people, setPeople] = useState([])

  //componentDidMount
  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
    .then((res) => res.json())
    .then((data) => setPeople(data.results))
  }, [])


  //1:20 in class 3 video
  //prints above function
  // useEffect(() => {
  //   console.log(people)
  // }, [people])

  return (
    <>
    <Items items={people}/>
    </>
  )
}

export default App


