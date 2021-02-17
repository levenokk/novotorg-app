import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { connect, ConnectedProps } from 'react-redux';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';
import Loader from '../components/Loader';
import { RootState } from '../store';
import { toggleLoading } from '../store/app/actions';

const mapState = (state: RootState) => ({
  loading: state.App.loading,
  items: state.Products.items,
  count: state.Products.count,
});

const mapDispatch = {
  setLoading: toggleLoading,
};

const connector = connect(mapState, mapDispatch);

export const StyledCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  padding: 0 15px;
`;

type PropsFromRedux = ConnectedProps<typeof connector>;

const Category = ({ loading, setLoading, items }: PropsFromRedux) => {
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <>
      <CSSTransition in={loading} timeout={200} classNames="page" unmountOnExit>
        <Loader />
      </CSSTransition>
      <CSSTransition
        timeout={200}
        classNames="page"
        unmountOnExit
        in={!loading}
      >
        <div style={{ overflow: 'auto', height: '100vh' }}>
          <Header mode="menu" title="" path="/home" />
          <StyledCategory>
            {items.map((item) => (
              // eslint-disable-next-line no-underscore-dangle
              <CategoryItem key={item._id} />
            ))}
          </StyledCategory>
        </div>
      </CSSTransition>
    </>
  );
};

export default connector(Category);
