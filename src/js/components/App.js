import React from 'react';
import AddTodo from './AddTodo';
import FilteredTodoList from './FilteredTodoList';
import Footer from './Footer';

const App = () => (
  <div>
    <AddTodo />
    <FilteredTodoList />
    <Footer />
  </div>
);

export default App;
