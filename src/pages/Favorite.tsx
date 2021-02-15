import React from 'react';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';
import { StyledCategory } from './Category';

const Favorite = () => {
  return (
    <div style={{ overflow: 'auto', height: '100vh' }}>
      <Header mode="title" title="Избранное" path="/category" />
      <StyledCategory>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </StyledCategory>
    </div>
  );
};

export default Favorite;
