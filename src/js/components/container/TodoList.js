import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../actions/actions';
import TodoList from '../presentational/TodoList';

const getTodos = (todos, filter) => {
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

const mapStateToProps = (state) => (
  {
    todos: getTodos(state.todos, state.visibilityFilter),
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },

    onDeleteClick: (id) => {
      dispatch(deleteTodo(id));
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
