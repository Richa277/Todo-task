function List(props) {
  return (
    <div>
      <h2>Todo</h2>
      <ol>
        {props.data.map((val, ind) => {
          return <li key={ind}>{val.text}</li>;
        })}
      </ol>
    </div>
  );
}
export default List;
