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
import { useAuth } from './context/auth-context';

import './App.css';

function App() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const { user } = useAuth();

  const onSubmit = (data) => {
    if (!user) {
      return alert('You must be logged in to add or update a todo.');
    }
    if (!data.id) {
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
    {user ? (
    <li>
    <Link to="/logout">Logout</Link>
    </li>
    ) : (
    <>
    <li>
    <Link to="/login">Login</Link>
    </li>
    <li>
    <Link to="/register">Register</Link>
    </li>
    </>
    )}
    </ul>
    </nav>
    
    Copy code
        <Switch>
          <Route path="/completed">
            <CompletedTodos todos={todos} />
          </Route>
          <Route path="/high-priority">
            <HighPriorityTodos todos={todos} />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            {user ? (
              <>
                <TodoForm
                  register={register}
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  errors={errors}
                />
                <Todos todos={todos} />
              </>
            ) : (
              <p>You must be logged in to view the todos.</p>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
    );
    }
    
    export default App;
    
    
