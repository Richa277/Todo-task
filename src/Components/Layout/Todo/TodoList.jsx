import { useEffect, useRef, useState } from "react";
import styles from "./TodoList.module.css";

function TodoList() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setData(items);
    }
  }, []);
  let getValue = useRef();
  const handleInputBox = () => {
    setValue(getValue.current.value);
  };
  const handleInput = (e) => {
    e.preventDefault();
    setData([...data,{ text: getValue.current.value }]);
    localStorage.setItem("data", JSON.stringify(data));
    setValue("");
  };


  return (
    <div className={styles.mainForm}>
      <form>
        <input
          type="text"
          placeholder="Add your task"
          ref={getValue}
          onChange={handleInputBox}
          className="input"
          value={value}
        />
        <button onClick={handleInput} className={styles.submit}>
          Submit
        </button>
      </form>
      <div>
        <h2 className={styles.Heading}>Todo</h2>
        <ol>
          {data.map((val) => {
            return (<li>{val.text}</li>)
          })}
        </ol>
      </div>
    </div>
  );
}
export default TodoList;
