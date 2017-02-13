import React from 'react';
import Header from './Header';
import AddTodo from './AddTodo';
import FilteredTodoList from './FilteredTodoList';
import Footer from './Footer';

const App = () => (
  <div className="todo-app">
    <Header />
    <AddTodo />
    <FilteredTodoList />
    <Footer />
  </div>
);

export default App;
