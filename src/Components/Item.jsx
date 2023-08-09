import { useState } from "react";
import styles from "./item.module.css"

function Item(props) {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const data = [
    
  ]
  
  return (
    <li className={styles.item}>
        <img src={props.person.picture.thumbnail}/>
        <h2>{props.person.name.first} {props.person.name.last}
        </h2>

        <p>
          Age: {props.person.dob.age}
        </p>
        <button onClick={handleToggle}>
          {!toggle ? "Click to hide" : "Click to show more info"}
        </button>
        {!toggle && <p>{props.person.gender}</p>}
        {/* {!toggle && <p>Location: {props.person.location}</p>}
        {!toggle && <p>Phone No.: {props.person.phone}</p>} */}
    </li>
  )
}

export default Item;