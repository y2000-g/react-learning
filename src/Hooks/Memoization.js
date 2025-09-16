import { useCallback, useState } from "react"
import Todos from "./Todos";

const Memoization = ()=>
{
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(
    [
        "Todo 1",
        "Todo 2",
        "Todo 3",
        "Todo 4",
        "Todo 5",
        "Todo 6",
        "Todo 7",
    ]);
    const increment = ()=>
    {
        setCount((c) => c+1);
    }

    const addTodo = useCallback(()=>
    {
        setTodos((t)=>[...t, "New Todo"]);
    }, [todos]);
    
    return(
        <>
            <Todos todos={todos} addTodo={addTodo}/>
            <hr/>
            <div>
                Count:{count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}
export default Memoization;