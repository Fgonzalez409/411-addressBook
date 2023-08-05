import Item from "./Item"
import styles from "./items.module.css"

 function Items(props) {
  return (
        <ul className={styles.items}> 
            {props.items.map((item) => (
                <Item key={item.login.uuid} person={item}/>
            ))}
        </ul>
  )
}
//rfc to create template
export default Items

