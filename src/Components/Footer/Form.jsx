import { useEffect, useRef, useState } from "react"
import './Form.css'

function Form(){

    // const[items,setItems]=useState([])
    const [data,setData]=useState([]);
    const [value,setValue]=useState("");// for input values
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('data'));
        if (items) {
         setData(items);
        }
        },[]);
    let getValue=useRef()
    const handleInputBox=()=>{
        setValue(getValue.current.value);
    }
    const handleInput=(e)=>{
        e.preventDefault();
        setData([...data,{text:getValue.current.value}]);
        localStorage.setItem('data',JSON.stringify(data))
        // console.log(data)  
         setValue("");
    }
 // const Local_Storage="react-todos";

    // useEffect(()=>{
    //  localStorage.setItem('data', JSON.stringify(data))
    // },[data])
    return(

    <div className="main-form">
    <form>
        <input type="text" placeholder="Add your task" ref={getValue} onChange={handleInputBox} className="input" value={value}/>
        <button onClick={handleInput} className="submit">Submit</button>
    </form>
    {/* <Todos data={data}/> */}
    <div >
    <table>
    <thead className="Heading">
       Todo
    </thead>
    <tbody>
           {data.map((val)=>{
               return(
                   <tr>
                   <td>{val.text}
                   <hr/>
                  </td>
                   </tr>
               )
           })}         
    </tbody>
</table>
    </div>

    </div>
    )
    }
    export default Form