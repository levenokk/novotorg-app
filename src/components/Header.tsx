import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import back from '../../assets/img/back.svg';
import hearth from '../../assets/img/hearth.svg';

const TITLE = 'title';
const MENU = 'menu';

const StyledHeader = styled.header`
  background: #ffffff;
  box-shadow: 1px 6px 17px rgba(111, 127, 207, 0.13);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .header__list {
    display: flex;
    list-style: none;
  }

  .header__list-item {
    margin-left: 30px;
    &:first-child {
      margin-left: 0;
    }
    a {
      color: #b57661;
      font-weight: 500;
      font-size: 18px;
      line-height: 17px;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      padding: 40px 0;
      position: relative;
      display: block;
      &.active {
        &:after {
          content: '';
          border-bottom: 2px solid #b57661;
          bottom: 0;
          left: 50%;
          width: 80%;
          height: 2px;
          position: absolute;
          transform: translateX(-50%);
        }
      }
    }
  }

  .header__hearth {
    position: relative;

    .header__hearth-count {
      position: absolute;
      right: -10px;
      top: -10px;
      background: #fff2ec;
      border-radius: 50px;
      width: 23px;
      height: 23px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      text-transform: uppercase;
      color: #b57661;
    }
  }

  .header__title {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #b57661;
    padding: 33px 0;
  }
`;

const HeaderMenu = () => {
  return (
    <ul className="header__list">
      <li className="header__list-item">
        <NavLink to="/category">Торты</NavLink>
      </li>
      <li className="header__list-item">
        <NavLink to="/category">Пирожные</NavLink>
      </li>
      <li className="header__list-item">
        <NavLink to="/category">Низкокаллорийные десерты</NavLink>
      </li>
    </ul>
  );
};

const HeaderTitle = ({ title = 'title' }) => {
  return <h1 className="header__title">{title}</h1>;
};

interface HeaderInterface {
  mode: typeof MENU | typeof TITLE;
  title?: string;
  path: string;
}

// eslint-disable-next-line react/prop-types
const Header: React.FC<HeaderInterface> = ({ mode, title, path = '/home' }) => {
  const Variant = useCallback(() => {
    return mode === 'menu' ? <HeaderMenu /> : <HeaderTitle title={title} />;
  }, []);

  return (
    <StyledHeader className="container">
      <NavLink to={path} className="header__back">
        <img src={back} alt="back" />
      </NavLink>
      <Variant />
      <div className="header__hearth">
        <div className="header__hearth-count">0</div>
        <NavLink to="/favorite">
          <img src={hearth} alt="hearth" />
        </NavLink>
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  mode: PropTypes.oneOf([TITLE, MENU]).isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Header;
