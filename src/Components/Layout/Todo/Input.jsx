import { useEffect, useRef, useState } from "react";
import List from "./TodoList";
import { get, set } from "../../../Services/Storage";
import styles from "./Input.module.css";

function TodoList() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const items = get();
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
    setData((data) => [...data, { text: getValue.current.value }]);
    set(data);
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
      <List data={data} />
    </div>
  );
}
export default TodoList;
