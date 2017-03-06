import { connect } from 'react-redux';
import { addTodo } from '../../actions/actions';
import AddTodo from '../presentational/AddTodo';

const mapDispatchToProps = dispatch => (
  {
    onSubmit: (e, input) => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }

      dispatch(addTodo(input.value));
      input.value = '';
    },
  }
);

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo);
