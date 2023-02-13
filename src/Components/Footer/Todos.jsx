function Todos(props){
    return(
        <div className="todos">
           <table>
               <thead>
                   <tr>
                       <td>
                           Task
                       </td>
                      
                      
                      
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       {props.data.map(()=>{
                           return(
                            <td>{props.data}</td>
                           )
                       })}
                   </tr>
               </tbody>
           </table>
        </div>
    )
}
export default Todos