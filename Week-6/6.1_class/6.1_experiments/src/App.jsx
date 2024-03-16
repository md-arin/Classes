import { useState } from "react";
import { useEffect } from "react";

function App() {
const[id, setId] = useState(1);

return(
  <div>
    <button onClick={()=>{
      setId(id+1)
    }}>Next</button>
    <Todo id={id}/>
  </div>
)
}

function Todo({id}) {
  const [todo, setTodo] = useState({})

  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todo?id="+ id)
    .then(async(res)=>{
      const data = await res.json();
      setTodo(data.todo);
    },[id])
  })
  return <div>
    <h2>
      {todo.title}
    </h2>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;