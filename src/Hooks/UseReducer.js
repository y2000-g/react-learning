import { useReducer, useState } from "react"

// const UseReducer = () =>
// {
//     const [todo, setTodo] = useState([])
//     let initialTodo = [
//         {
//             id: 1,
//             title : "Todo 1",
//             Completed : false
//         },
//          {
//             id: 2,
//             title : "Todo 2",
//             Completed : false
//         },
//          {
//             id: 3,
//             title : "Todo 3",
//             Completed : false
//         },
//          {
//             id:4,
//             title : "Todo 4",
//             Completed : false
//         },
//     ]
//     if(todo.length === 0)
//     {
//         setTodo(initialTodo)
//     }
//     const  handleComplete = (todoTemp)=>
//     {
//         setTodo(
//             todo.map((todoListItem)=>
//             {
//                 if(todoListItem.id == todoTemp.id)
//                 {
//                     return{...todoListItem, Completed: !todoTemp.Completed}
//                 }
//                 else
//                 {
//                     return todoListItem
//                 }
//             })
//         )
//     }
//     return <div>
//         {
//             todo.map((todo)=>(
//                 <div>
//                     <label>
//                         <input
//                         type="checkbox"
//                         checked={todo.Completed}
//                         onChange={()=> handleComplete(todo)}/>
//                         {todo.title}
//                     </label>
//                 </div>
//             ))
//         }
//     </div>
// }

const reducer = (state, action)=>
{
    switch(action.type)
    {
        case "COMPLETE":
            return state.map((todo)=>
            {
                if(todo.id == action.id)
                {
                    return{...todo, Completed: !todo.completed}
                }
                else
                {
                    return todo;
                }
            }); 
        default:
            return state; 
    }
}
const UseReducer = () =>
{
    let initialTodo = [
        {
            id: 1,
            title : "Todo 1",
            Completed : false
        },
         {
            id: 2,
            title : "Todo 2",
            Completed : false
        },
         {
            id: 3,
            title : "Todo 3",
            Completed : false
        },
         {
            id:4,
            title : "Todo 4",
            Completed : false
        },
    ]
    const [todo, dispatch] = useReducer(reducer, initialTodo);
    const handleComplete = (todoTemp)=>
    {
        let action = {
            type: "COMPLETE",
            id: todoTemp.id //payLoad
        }
        dispatch(action)
    }
    return <div>
        {
             todo.map((todo)=>(
                <div>
                    <label>
                        <input
                        type="checkbox"
                        checked={todo.Completed}
                        onChange={()=> handleComplete(todo)}/>
                        {todo.title}
                    </label>
                </div>
            ))
        }
    </div>
}   
export default UseReducer;