import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import AddTodoForm from './AddTodoForm';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e, input) => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(addTodo(input.value));
      input.value = '';
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm);
