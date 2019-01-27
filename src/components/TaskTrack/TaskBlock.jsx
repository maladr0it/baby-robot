import React from 'react';
import styled from 'styled-components';

import { IDLE } from '../../constants/taskTypes';

// TODO: change types to constants
const ICONS = {
  EAT: 'fas fa-utensils',
  PLAY: 'fas fa-smile-beam',
  BATHE: 'fas fa-shower'
};

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.3rem;
  margin: 0 0.1rem;

  background-color: ${({ theme }) => theme.primary};
  visibility: ${props => (props.type === IDLE ? 'hidden' : 'visible')};
  text-align: center;
  height: 100%
  font-size: 1.5rem;

  &:not(:first-child) {
    padding-left: 0.2rem;
  }

`;

const TaskBlock = ({ type }) => (
  <Container type={type}>
    <i className={ICONS[type]} />
  </Container>
);

export default TaskBlock;
