import React from 'react';
import Header from './presentational/Header';
import AddTodo from './container/AddTodo';
import TodoList from './container/TodoList';
import Footer from './presentational/Footer';

const App = () => (
  <div className="todo-app">
    <Header />
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default App;
