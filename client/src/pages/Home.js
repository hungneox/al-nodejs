import React from 'react';
import styled from 'styled-components';
import AddDoc from '../components/AddDoc';
import ListDoc from '../components/ListDoc';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
//   background-color: #fff;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.h1`
  color: #fff;
`;

const Home = () => {
  return (
    <MainWrapper>
      <StyledHeading>My Todo App</StyledHeading>
      <AddDoc />
      <ListDoc />
    </MainWrapper>
  );
};

export default Home;
