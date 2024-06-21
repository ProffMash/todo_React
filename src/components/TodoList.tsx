import TodoItem from './TodoItem';
import './TodoList.scss';

interface TodoListProps {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onClearCompleted: () => void;
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete, onClearCompleted, filter, setFilter }: TodoListProps) => {
  const itemsLeft = todos.filter((todo: { completed: boolean }) => !todo.completed).length;

  const filteredTodos = todos.filter((todo: { completed: boolean }) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? (
        <p className="empty-message"></p>
      ) : (
        filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))
      )}
      <div className="todo-footer">
        <span>{itemsLeft} items left</span>
        <div className="filters">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
          <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
        </div>
        <button className="clear-completed" onClick={onClearCompleted}>Clear Completed</button>
      </div>
    </div>
  )
}

export default TodoList;
