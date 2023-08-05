
import styles from "./item.module.css"

function Item(props) {
  return (
    <li className={styles.item}>
        <img src={props.person.picture.thumbnail}/>
        <h2>{props.person.name.first} {props.person.name.last}
        </h2>

        <p>
          Age: {props.person.dob.age}
        </p>
        {/* <button onClick={}>Click for additional information</button> */}
    </li>
  )
}

export default Item;