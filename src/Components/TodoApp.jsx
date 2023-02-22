import Header from './Header';
import Navbar from './Navbar';
import TodosLogic from './TodosLogic';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Navbar />
      <Header />
      <TodosLogic />
    </div>

  </div>
);

export default TodoApp;
