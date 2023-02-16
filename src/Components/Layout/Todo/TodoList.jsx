import { useEffect, useRef, useState } from "react";
import { get, set } from "../../../Services/Storage";
import styles from "./TodoList.module.css";

function TodoList() {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState({ text: "" });
  const inputValue = useRef();
  useEffect(() => {
    const items = get("data");
    if (items) {
      setData(items);
    }
  }, []);
  const handleSubmit = (e) => {
    let { id, text } = todo;
    e.preventDefault();

    setData((data) => {
      if (id) {
        text = inputValue.current.value;
        return data.map((ele) => (ele.id === id ? { ...ele, text } : ele));
      } else {
        return [
          ...data,
          { id: Math.random() * 1000, text: inputValue.current.value },
        ];
      }
    });
  };
  useEffect(() => {
    set("data", data);
    inputValue.current.value = "";
  }, [data]);
  const handleEdit = (idd) => {
    let newEDit = data.find((ele) => {
      return ele.id === idd;
    });
    setTodo({ text: newEDit.text, id: newEDit.id });
    inputValue.current.value = newEDit.text;
  };
  return (
    <div className={styles.mainForm}>
      <form>
        <input
          type="text"
          placeholder="Add your task"
          className="input"
          ref={inputValue}
        />

        <button onClick={handleSubmit} className={styles.submit}>
          Submit
        </button>
      </form>
      <div>
        <h2>Todo</h2>
        <ol>
          {data.map((val) => {
            return (
              <li key={val.id}>
                {val.text}
                <button
                  onClick={() => handleEdit(val.id)}
                  className={styles.edit}
                >
                  edit
                </button>
                <hr className={styles.line} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
export default TodoList;
