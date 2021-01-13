import './App.css';
import TodoData from './data/TodoData';
import TodoItem from './components/TodoItem';

function App() {
  const TodoList = TodoData.map(function(todo){
    return <TodoItem key={todo.id} todo={todo} />
  })

  return (
    <div>
      { TodoList }
    </div>
  );
}

export default App;
