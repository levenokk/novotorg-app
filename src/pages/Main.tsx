import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import bg from '../../assets/img/bg.png';
import logo from '../../assets/img/icon.png';
import Navigation from '../components/Nav';

const StyledMain = styled.main`
  background-image: url(${bg});
  height: 100vh;
  background-repeat: no-repeat;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .menu-enter {
    opacity: 0;
    top: -100%;
    transform: scale(0);
  }
  .menu-enter-active {
    opacity: 1;
    top: 0;
    transform: scale(1);
    transition: opacity 200ms, transform 400ms, top 300ms;
  }
  .menu-exit {
    opacity: 1;
    top: 0;
  }
  .menu-exit-active {
    opacity: 0;
    transform: scale(0);
    top: -100%;
    transition: opacity 300ms, transform 400ms, top 300ms;
  }
`;

const StyledBtn = styled.button`
  max-width: 280px;
  width: 100%;
  left: 50%;
  border: none;
  background: rgba(227, 30, 36, 0.24);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  height: 62px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 40px;
  span {
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    background: #e31e24;
    border-radius: 50px;
    max-width: 242px;
    width: 100%;
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background: #e31e24;
  }
`;

const MainView = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledMain>
      <CSSTransition unmountOnExit in={open} timeout={200} classNames="menu">
        <Navigation setOpen={setOpen} />
      </CSSTransition>
      <img src={logo} alt="Новоторг" draggable={false} />
      <StyledBtn
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span>В каталог</span>
      </StyledBtn>
    </StyledMain>
  );
};

export default MainView;
