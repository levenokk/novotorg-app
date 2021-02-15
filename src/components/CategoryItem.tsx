import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import img from '../../assets/img/1.png';
import activeLike from '../../assets/img/hearth.svg';
import disableLike from '../../assets/img/like.svg';

const StyledCategoryItem = styled.div`
  background: #ffffff;
  box-shadow: 1px 6px 17px rgba(111, 127, 207, 0.13);
  border-radius: 30px;
  padding: 0 0 20px;
  position: relative;
  overflow: hidden;

  .img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: #b57661;
    margin-bottom: 1px;
    margin-top: -20px;
  }

  .weight {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-transform: lowercase;
    color: #c4c4c4;
    margin-bottom: 7px;
  }

  .price {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #373737;
  }

  .like {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 62px;
    height: 47px;
    border-radius: 0 30px 0 30px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    cursor: pointer;
    user-select: none;
  }
`;

const CategoryItem = () => {
  const [like, setLike] = useState(false);
  return (
    <StyledCategoryItem>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => {
          setLike(!like);
        }}
        className="like"
      >
        <img src={like ? activeLike : disableLike} alt="like" />
      </div>
      <NavLink to="/single">
        <img className="img" src={img} alt="img" />
      </NavLink>
      <NavLink to="/single">
        <h5 className="title">Банановое румбо</h5>
      </NavLink>
      <p className="weight">1 кг</p>
      <p className="price">0000,00 руб.</p>
    </StyledCategoryItem>
  );
};

export default CategoryItem;
