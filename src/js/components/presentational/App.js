import React from 'react';
import Header from './Header';
import AddTodo from '../container/AddTodo';
import TodoList from '../container/TodoList';
import Footer from './Footer';

const App = () => (
  <div className="todo-app">
    <Header />
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default App;
