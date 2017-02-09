import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/actions';
import TodoList from './TodoList';

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getFilteredTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    onDeleteClick: (id) => {
      dispatch(deleteTodo(id));
    },
  };
};

const FilteredTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default FilteredTodoList;
