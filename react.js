import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo } from './actions/todoActions';

import './App.css';

function App() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const onSubmit = (data) => {
    if (!data.id) {
      data.priority = 'normal';
      dispatch(addTodo(data));
    } else {
      dispatch(updateTodo(data));
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
            <li>
              <Link to="/high-priority">High Priority</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/completed">
            <CompletedTodos todos={todos} />
          </Route>
          <Route path="/high-priority">
            <HighPriorityTodos todos={todos} />
          </Route>
          <Route path="/">
            <TodoForm
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              errors={errors}
            />
            <Todos todos={todos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

