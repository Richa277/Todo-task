import styles from "./TodoList.module.css";
function List(props) {
  return (
    <div>
      <h2>Todo</h2>
      <ol className={styles.edit}>
        {props.data.map((val, ind) => {
          return <li key={ind}>{val.text}</li>;
        })}
      </ol>
    </div>
  );
}
export default List;
