import React from 'react';
import styled from 'styled-components';
import AddDoc from '../components/AddDoc';
import ListDoc from '../components/ListDoc';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: #000;
`;

const Home = () => {
  return (
    <MainWrapper>
      <Heading>Document list</Heading>
      <AddDoc />
      <ListDoc />
    </MainWrapper>
  );
};

export default Home;
