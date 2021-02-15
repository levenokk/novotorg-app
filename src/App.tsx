import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.global.css';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import MainView from './pages/Main';
import Category from './pages/Category';
import Single from './pages/Single';
import Favorite from './pages/Favorite';

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
  { path: '/single', name: 'Category', Component: Single },
  { path: '/favorite', name: 'Category', Component: Favorite },
];

export default function App() {
  return (
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
  );
}
