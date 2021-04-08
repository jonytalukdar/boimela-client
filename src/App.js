import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import { Container } from 'react-bootstrap';
import ManageBook from './components/manageBook/ManageBook';
import Orders from './components/Orders/Orders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <Container>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/book/:_id">
              <Book />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/manage">
              <ManageBook></ManageBook>
            </Route>
            <Route>
              <Orders></Orders>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
