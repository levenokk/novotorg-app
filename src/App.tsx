import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.global.css';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Provider } from 'react-redux';
import MainView from './pages/Main';
import Category from './pages/Category';
import Single from './pages/Single';
import Favorite from './pages/Favorite';
import store from './store';

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  .page {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .container {
    padding: 0 15px;
  }
`;

const routes = [
  { path: '/home', name: 'Home', Component: MainView },
  { path: '/category', name: 'Category', Component: Category },
  { path: '/single', name: 'Single', Component: Single },
  { path: '/favorite', name: 'Favorite', Component: Favorite },
];

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={200}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
          <Redirect to="/home" />
        </Router>
      </Container>
    </Provider>
  );
}
