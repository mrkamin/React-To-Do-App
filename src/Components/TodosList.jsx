import Todoitem from "./TodoItem";

const TodosList = ({todosProps, handleChange, delTodo, setUpdate}) => {
    
    return (
        <ul >
            {todosProps.map((todo) => (
                <Todoitem 
                key={todo.id} 
                itemProp={todo} 
                handleChange={handleChange}
                delTodo={delTodo}
                setUpdate={setUpdate}/>
            ))}
        </ul>
    );
};

export default TodosList;