import { useEffect, useState } from "react";
import List from "./TodoList";
import { get, set } from "../../../Services/Storage";
import styles from "./Input.module.css";

function TodoList() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [id, setId] = useState(1);
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
    setId(id + 1);
    setData((data) => [...data, { id: id, text: value }]);
    setValue("");
  };
  useEffect(() => {
    set("data", data);
  });
  console.log(data);
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
        <button onClick={handleSubmit} className={styles.submit}>
          Submit
        </button>
      </form>
      <List data={data} setData={setData} />
    </div>
  );
}
export default TodoList;
