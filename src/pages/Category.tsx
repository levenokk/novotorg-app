import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';
import Loader from '../components/Loader';

export const StyledCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  padding: 0 15px;
`;

const Category = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoad(false), 10000);
  }, []);

  return (
    <>
      <CSSTransition in={load} timeout={200} classNames="page" unmountOnExit>
        <Loader />
      </CSSTransition>
      <CSSTransition timeout={200} classNames="page" unmountOnExit in={!load}>
        <div style={{ overflow: 'auto', height: '100vh' }}>
          <Header mode="menu" title="" path="/home" />
          <StyledCategory>
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </StyledCategory>
        </div>
      </CSSTransition>
    </>
  );
};

export default Category;
