import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [id, setId] = useState(1);

  return <div>
    <button onClick={()=>{
      console.log("button clicked");
      setId(id+1)
    }}>Next</button>
    <Todo id={id} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function(res) {
        const json = await res.json();
        setTodo (json.todo);
      })
  }, [id])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;