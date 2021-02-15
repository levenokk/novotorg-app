import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo(small).png';

const StyledMenu = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 2;
  background-color: #fff5e2;
  display: flex;
  justify-content: center;
  align-items: center;

  .menu__wrapper {
    background-color: #fff;
    width: 100%;
    border-radius: 50px;

    img {
      display: block;
      margin: 0 auto;
    }
  }

  .menu__wrapper-top {
    padding: 16px 0;
    box-shadow: 1px 6px 17px rgba(111, 127, 207, 0.13);
    background-color: #fff;
    border-radius: 50px;
  }

  .menu__wrapper-list {
    list-style: none;
    padding: 0 25px;

    li {
      &:last-child {
        a {
          border: none;
        }
      }

      a {
        text-align: center;
        padding: 25px 0;
        border-bottom: 1px solid rgba(111, 127, 207, 0.13);
        width: 100%;
        display: block;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        color: #b57661;
        text-decoration: none;
      }
    }
  }
`;

interface NavigationProps {
  setOpen: (bool: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setOpen }) => {
  const closeListener = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeListener);

    return () => window.removeEventListener('keydown', closeListener);
  });

  return (
    <StyledMenu>
      <div className="menu__wrapper">
        <div className="menu__wrapper-top">
          <img src={logo} alt="small" />
        </div>
        <ul className="menu__wrapper-list">
          <li>
            <NavLink to="/category">Торты</NavLink>
          </li>
          <li>
            <NavLink to="/category">Пирожные</NavLink>
          </li>
          <li>
            <NavLink to="/category">Низкокаллорийные десерты</NavLink>
          </li>
        </ul>
      </div>
    </StyledMenu>
  );
};

Navigation.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default Navigation;
