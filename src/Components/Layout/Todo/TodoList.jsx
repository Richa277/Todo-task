import { useEffect, useState } from "react";
import { get, set } from "../../../Services/Storage";
import styles from "./TodoList.module.css";

function TodoList() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [editing, setEditing] = useState(false);
  const [selected, setSelected] = useState(true);
  useEffect(() => {
    const items = get("data");
    if (items) {
      setData(items);
    }
  }, []);
  const handleInputBox = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData((data) => [...data, { id: Math.random() * 1000, text: value }]);
    setValue("");
  };
  useEffect(() => {
    set("data", data);
  }, [data]);
  const handleEdit = (idd) => {
    setEditing(true);
    let newEDit = data.find((ele) => {
      return ele.id === idd;
    });
    setSelected(newEDit.id);
    setValue(newEDit.text);
  };
  const handleSave = () => {
    setData(
      data.map((ele) => {
        if (ele.id === selected) {
          return { ...ele, text: value };
        }
        return ele;
      })
    );
    setEditing(false);
    setValue("");
  };
  return (
    <div className={styles.mainForm}>
      <form>
        <input
          type="text"
          placeholder="Add your task"
          onChange={handleInputBox}
          className="input"
          value={value}
        />
        {!editing && (
          <button onClick={handleSubmit} className={styles.submit}>
            Submit
          </button>
        )}
        {editing && (
          <button onClick={handleSave} className={styles.save}>
            Save
          </button>
        )}
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
