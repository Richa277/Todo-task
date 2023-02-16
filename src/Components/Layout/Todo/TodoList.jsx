import { useEffect, useState } from "react";
import { get, set } from "../../../Services/Storage";
import styles from "./TodoList.module.css";

function TodoList() {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState({ text: "" });
  const handleChange = (e) => {
    setTodo((todo) => ({
      ...todo,
      text: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    let { id, text } = todo;
    e.preventDefault();
    setData((data) => {
      if (id) {
        return data.map((ele) => (ele.id === id ? { ...ele, text } : ele));
      } else {
        return [...data, { id: Math.random() * 1000, text: todo.text }];
      }
    });
  };
  const handleEdit = (idd) => {
    let newEDit = data.find((ele) => {
      return ele.id === idd;
    });
    setTodo({ text: newEDit.text, id: newEDit.id });
  };
  useEffect(() => {
    set("data", data);
    setTodo({ text: "" });
  }, [data]);

  useEffect(() => {
    const items = get("data");
    if (items) {
      setData(items);
    }
  }, []);

  return (
    <div className={styles.mainForm}>
      <form>
        <input
          type="text"
          placeholder="Add your task"
          className="input"
          onChange={handleChange}
          value={todo.text}
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
